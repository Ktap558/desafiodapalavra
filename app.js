const LADDER=[100,200,500,1000,2000,5000,10000,20000,50000,100000,500000,1000000];
const LETTERS=["A","B","C","D"];
const verseMap=Object.fromEntries(VERSES.map(v=>[v.id,v]));

const state={
  block:"A",
  runIds:[],
  step:0,
  score:0,
  current:null,
  correctReference:"",
  locked:false,
  stats:loadStats()
};

const studyState={
  filtered:[...VERSES],
  index:0
};

const $=id=>document.getElementById(id);
const screens={home:$("home"),game:$("game"),study:$("study"),wrong:$("wrong"),win:$("win")};

$("retryBtn").onclick=()=>startBlock(state.block);
$("againBtn").onclick=()=>startBlock(state.block);
$("wrongHomeBtn").onclick=showHome;
$("winHomeBtn").onclick=showHome;
$("studyBtn").onclick=openStudy;
$("studyHomeBtn").onclick=showHome;
$("studyBookFilter").onchange=refreshStudyFilter;
$("studyVerseSelect").onchange=()=>{studyState.index=Number($("studyVerseSelect").value)||0;renderStudy();};
$("prevStudyBtn").onclick=()=>moveStudy(-1);
$("nextStudyBtn").onclick=()=>moveStudy(1);
$("howBtn").onclick=()=>$("modal").classList.remove("hidden");
$("closeModal").onclick=()=>$("modal").classList.add("hidden");

function defaults(){
  return {
    record:0,
    blockRecords:{A:0,B:0,C:0,D:0},
    pending:{A:null,B:null,C:null,D:null}
  };
}

function loadStats(){
  try{
    const raw=JSON.parse(localStorage.getItem("desafioPalavraV5"))||{};
    const d=defaults();
    return {
      ...d,
      ...raw,
      blockRecords:{...d.blockRecords,...(raw.blockRecords||{})},
      pending:{...d.pending,...(raw.pending||{})}
    };
  }catch{
    return defaults();
  }
}

function saveStats(){
  localStorage.setItem("desafioPalavraV5",JSON.stringify(state.stats));
}

function showScreen(name){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[name].classList.add("active");
}

function ref(v){
  return `${v.book} ${v.chapter}:${v.verse}`;
}

function updateHome(){
  $("record").textContent=state.stats.record.toLocaleString("pt-BR");
  const wrap=$("blocks");
  wrap.innerHTML="";

  for(const block of ["A","B","C","D"]){
    const pendingId=state.stats.pending[block];
    const pendingVerse=pendingId ? verseMap[pendingId] : null;
    const btn=document.createElement("button");
    btn.className="block-btn";

    const pendingHtml=pendingVerse
      ? `<span class="pending">↻ Pendente: ${ref(pendingVerse)}</span>`
      : `<span>12 perguntas fixas</span>`;

    btn.innerHTML=`
      <b>Bloco ${block}</b>
      <span>Recorde: ${(state.stats.blockRecords[block]||0).toLocaleString("pt-BR")}</span>
      ${pendingHtml}
    `;
    btn.onclick=()=>startBlock(block);
    wrap.appendChild(btn);
  }
}

function showHome(){
  
function openStudy(){
  $("studyBookFilter").value="Todos";
  studyState.filtered=[...VERSES];
  studyState.index=0;
  populateStudySelect();
  renderStudy();
  showScreen("study");
}

function refreshStudyFilter(){
  const book=$("studyBookFilter").value;
  studyState.filtered=book==="Todos" ? [...VERSES] : VERSES.filter(v=>v.book===book);
  studyState.index=0;
  populateStudySelect();
  renderStudy();
}

function populateStudySelect(){
  const select=$("studyVerseSelect");
  select.innerHTML="";
  studyState.filtered.forEach((v,i)=>{
    const option=document.createElement("option");
    option.value=String(i);
    option.textContent=ref(v);
    select.appendChild(option);
  });
  select.value=String(studyState.index);
}

function renderStudy(){
  if(!studyState.filtered.length) return;
  const v=studyState.filtered[studyState.index];
  const s=STUDIES[v.id];

  $("studyVerseSelect").value=String(studyState.index);
  $("studyReference").textContent=ref(v);
  $("studyVerseText").textContent=`“${v.text}”`;

  $("studyContext").textContent=s?.context||"Contexto ainda não cadastrado.";
  $("studyExplanation").textContent=s?.explanation||"Explicação ainda não cadastrada.";
  $("studyLesson").textContent=s?.lesson||"Lição ainda não cadastrada.";
  $("studyReflection").textContent=s?.reflection||"Reflexão ainda não cadastrada.";

  $("prevStudyBtn").disabled=studyState.index===0;
  $("nextStudyBtn").disabled=studyState.index===studyState.filtered.length-1;
}

function moveStudy(direction){
  const next=studyState.index+direction;
  if(next<0 || next>=studyState.filtered.length) return;
  studyState.index=next;
  renderStudy();
}

updateHome();
  showScreen("home");
}

function rotateToPending(ids,pendingId){
  if(!pendingId || !ids.includes(pendingId)) return [...ids];
  const i=ids.indexOf(pendingId);
  return [...ids.slice(i),...ids.slice(0,i)];
}

function startBlock(block){
  state.block=block;
  state.step=0;
  state.score=0;
  state.locked=false;

  // The failed question becomes question #1 in the next attempt.
  state.runIds=rotateToPending(BLOCKS[block],state.stats.pending[block]);

  $("blockName").textContent=`BLOCO ${block}`;
  showScreen("game");
  nextQuestion();
}

function nextQuestion(){
  if(state.step>=LADDER.length){
    finishWin();
    return;
  }
  state.locked=false;
  state.current=verseMap[state.runIds[state.step]];
  state.correctReference=ref(state.current);
  renderQuestion();
}

function deterministicDistractors(correctVerse){
  const blockIds=BLOCKS[state.block];
  const currentIndex=blockIds.indexOf(correctVerse.id);

  const candidates=[];

  // Fixed nearby references in the same block.
  for(let offset=1;offset<blockIds.length && candidates.length<3;offset++){
    const ids=[
      blockIds[(currentIndex+offset)%blockIds.length],
      blockIds[(currentIndex-offset+blockIds.length)%blockIds.length]
    ];
    for(const id of ids){
      const v=verseMap[id];
      if(v && v.id!==correctVerse.id && !candidates.some(x=>x.id===v.id)){
        candidates.push(v);
        if(candidates.length===3) break;
      }
    }
  }

  // Favor same-book references when available, but stay deterministic.
  const sameBook=VERSES.filter(v=>v.book===correctVerse.book && v.id!==correctVerse.id)
    .sort((a,b)=>(a.chapter-b.chapter)||(a.verse-b.verse));

  if(sameBook.length){
    candidates[0]=sameBook[Math.abs(correctVerse.chapter+correctVerse.verse)%sameBook.length];
  }

  // Remove accidental duplicates and refill deterministically.
  const unique=[];
  for(const v of candidates){
    if(v && v.id!==correctVerse.id && !unique.some(x=>x.id===v.id)) unique.push(v);
  }
  for(const id of blockIds){
    const v=verseMap[id];
    if(v.id!==correctVerse.id && !unique.some(x=>x.id===v.id)) unique.push(v);
    if(unique.length===3) break;
  }
  return unique.slice(0,3);
}

function makeOptions(v){
  const refs=[v,...deterministicDistractors(v)].map(ref);

  // Fixed option order based on the verse identity so it never changes between retries.
  const seed=[...v.id].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
  const correctPos=seed%4;
  const correct=refs[0];
  const wrong=refs.slice(1);
  const out=[];
  let w=0;
  for(let i=0;i<4;i++){
    if(i===correctPos) out.push(correct);
    else out.push(wrong[w++]);
  }
  return out;
}

function renderQuestion(){
  const v=state.current;
  $("score").textContent=state.score.toLocaleString("pt-BR");
  $("step").textContent=`${state.step+1}/12`;
  $("progressFill").style.width=`${((state.step+1)/12)*100}%`;
  $("valueText").textContent=`VALENDO ${LADDER[state.step].toLocaleString("pt-BR")} PONTOS`;
  $("verseText").textContent=`“${v.text}”`;

  const box=$("options");
  box.innerHTML="";
  const options=makeOptions(v);

  options.forEach((reference,index)=>{
    const btn=document.createElement("button");
    btn.className="option";
    btn.dataset.reference=reference;
    btn.innerHTML=`<span class="option-letter">${LETTERS[index]}</span><span>${reference}</span>`;
    btn.onclick=()=>answer(reference,btn);
    box.appendChild(btn);
  });
}

function answer(reference,button){
  if(state.locked) return;
  state.locked=true;

  if(reference===state.correctReference){
    button.classList.add("correct");

    // Once the pending verse is answered correctly, it is no longer pending.
    if(state.stats.pending[state.block]===state.current.id){
      state.stats.pending[state.block]=null;
    }

    state.score=LADDER[state.step];
    state.stats.blockRecords[state.block]=Math.max(state.stats.blockRecords[state.block]||0,state.score);
    state.stats.record=Math.max(state.stats.record,state.score);
    saveStats();

    toast("✅ Correto!");
    setTimeout(()=>{
      state.step++;
      nextQuestion();
    },650);
  }else{
    button.classList.add("wrong");
    [...$("options").querySelectorAll(".option")].forEach(b=>{
      if(b.dataset.reference===state.correctReference) b.classList.add("correct");
    });

    // This exact verse becomes the first question of the next attempt.
    state.stats.pending[state.block]=state.current.id;
    saveStats();

    setTimeout(showWrong,850);
  }
}

function showWrong(){
  $("correctReference").textContent=state.correctReference;
  $("reviewVerse").textContent=`“${state.current.text}”`;
  $("reachedScore").textContent=state.score.toLocaleString("pt-BR");
  showScreen("wrong");
}

function finishWin(){
  state.score=1000000;
  state.stats.pending[state.block]=null;
  state.stats.blockRecords[state.block]=1000000;
  state.stats.record=Math.max(state.stats.record,1000000);
  saveStats();
  showScreen("win");
}

function toast(message){
  const el=$("toast");
  el.textContent=message;
  el.classList.remove("hidden");
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>el.classList.add("hidden"),1200);
}


function openStudy(){
  $("studyBookFilter").value="Todos";
  studyState.filtered=[...VERSES];
  studyState.index=0;
  populateStudySelect();
  renderStudy();
  showScreen("study");
}

function refreshStudyFilter(){
  const book=$("studyBookFilter").value;
  studyState.filtered=book==="Todos" ? [...VERSES] : VERSES.filter(v=>v.book===book);
  studyState.index=0;
  populateStudySelect();
  renderStudy();
}

function populateStudySelect(){
  const select=$("studyVerseSelect");
  select.innerHTML="";
  studyState.filtered.forEach((v,i)=>{
    const option=document.createElement("option");
    option.value=String(i);
    option.textContent=ref(v);
    select.appendChild(option);
  });
  select.value=String(studyState.index);
}

function renderStudy(){
  if(!studyState.filtered.length) return;
  const v=studyState.filtered[studyState.index];
  const s=STUDIES[v.id];

  $("studyVerseSelect").value=String(studyState.index);
  $("studyReference").textContent=ref(v);
  $("studyVerseText").textContent=`“${v.text}”`;

  $("studyContext").textContent=s?.context||"Contexto ainda não cadastrado.";
  $("studyExplanation").textContent=s?.explanation||"Explicação ainda não cadastrada.";
  $("studyLesson").textContent=s?.lesson||"Lição ainda não cadastrada.";
  $("studyReflection").textContent=s?.reflection||"Reflexão ainda não cadastrada.";

  $("prevStudyBtn").disabled=studyState.index===0;
  $("nextStudyBtn").disabled=studyState.index===studyState.filtered.length-1;
}

function moveStudy(direction){
  const next=studyState.index+direction;
  if(next<0 || next>=studyState.filtered.length) return;
  studyState.index=next;
  renderStudy();
}

updateHome();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("./service-worker.js").catch(console.error);
  });
}
