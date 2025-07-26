// 定義症狀對應的疾病清單
const symptoms = {
  "頭痛": [
    "叢集性頭痛（Cluster headache）",
    "緊張型頭痛（Tension headache）",
    "藥物過度使用性頭痛（Medication Overuse headaches, MOH）",
    "鼻竇性頭痛（Sinus headaches）",
    "慢性日常性頭痛（Chronic daily headaches）",
    "咳嗽性頭痛（Cough Headaches）",
    "雷鳴性頭痛（Thunderclap headaches）"
  ],
  "發燒": [
    "登革熱（Dengue Fever）",
    "風濕熱（Rheumatic Fever）",
    "發燒（Fever）",
    "猩紅熱（Scarlet Fever）",
    "花粉熱（Hay Fever）",
    "唇疱疹（Cold sores）",
    "傷寒（Typhoid fever）"
  ],
  "疲勞": [
    "肌痛性腦脊髓炎／慢性疲勞症候群（ME／CFS）",
    "肌無力（Myasthenia gravis）",
    "支氣管炎（Bronchitis）",
    "再生不良性貧血（Aplastic anemia／Aplastic anaemia）",
    "腦震盪症候群（PPCS）",
    "時差症候群（Jet lag）"
  ],
  "疲倦": [
    "肌痛性腦脊髓炎／慢性疲勞症候群（ME／CFS）",
    "肌無力（Myasthenia gravis）",
    "支氣管炎（Bronchitis）",
    "再生不良性貧血（Aplastic anemia／Aplastic anaemia）",
    "腦震盪症候群（PPCS）",
    "時差症候群（Jet lag）"
  ],
  "咳嗽": [
    "慢性咳嗽（Chronic cough）",
    "咳嗽性頭痛（Cough Headaches）",
    "百日咳（Whooping cough）",
    "壓力性尿失禁（Stress incontinence）",
    "感冒（Common cold）",
    "支氣管炎（Bronchitis）"
  ],
  "喉嚨痛": [
    "感冒（Common cold）",
    "猩紅熱（Scarlet Fever）",
    "咽喉炎（Sore throat）",
    "扁桃腺炎（Tonsillitis）"
  ],
  "腹痛": [
    "生理期（Menstruation）"
  ],
  "失眠": [
    "失眠（Insomnia）",
    "睡眠障礙（Sleep disorders）"
  ],
  "癲癇": [
    "自體免疫性腦炎（Autoimmune epilepsy）",
    "額葉癲癇發作（Frontal lobe seizures）",
    "癲癇（Epilepsy）"
  ],
  "手腳麻痺": [
    "格林─巴利症候群（Guillain-Barre Syndrome）",
    "原發性側索硬化（Primary lateral sclerosis, PLS）"
  ],
  "關節酸痛": [
    "顳頜關節症（TMJ）",
    "拇指腕掌關節炎（Thumb CMC joint arthritis）",
    "薦髂關節炎（Sacroiliitis）",
    "假性痛風（Pseudogout）",
    "類風濕性關節炎（Rheumatoid arthritis）",
    "關節炎（總稱）（Arthritis）"
  ],
  "腰痛": [
    "薦髂關節炎（Sacroiliitis）",
    "背痛（Back Pain）"
  ],
  "背痛": [
    "薦髂關節炎（Sacroiliitis）",
    "背痛（Back Pain）"
  ],
  "頭暈": [
    "頭暈（Dizziness）",
    "良性陣發性位姿勢性暈眩（BPPV）",
    "外傷後腦脊液滲漏（CSF leak）",
    "梅尼爾氏症（Meniere's disease）",
    "低血壓（Low blood pressure）",
    "低血糖（Hypoglycemia）",
    "腦震盪（Concussion）"
  ],
  "腹瀉": [
  "腹瀉（Diarrhea）",
  "旅行者腹瀉（Traveler's Diarrhea, TD）",
  "抗生素相關腹瀉（Antibiotic-associated diarrhea）",
  "桿菌痢疾（Shigella infection）",
  "顯微鏡性結腸炎（Microscopic colitis, MC）",
  "霍亂（Cholera）",
  "食物中毒（Food Poisoning）"
],
"胸痛": [
  "胸痛（Chest pain）",
  "軟肋骨炎（Costochondritis）",
  "急性冠心症／心絞痛（Unstable Angina Pectoris）",
  "胸膜炎（Pleurisy）",
  "心肌缺血（Myocardial ischemia）",
  "食道炎（Esophagitis）"
],
"嘔吐": [
  "食物中毒（Food Poisoning）",
  "週期性嘔吐症候群（Cyclic vomiting syndrome）",
  "孕吐（Morning sickness）",
  "諾羅病毒（Norovirus）",
  "偏頭痛（Migraine）",
  "暴食症／心因性暴食症（Bulimia nervosa）",
  "輪狀病毒（Rotavirus, RV）"
],
"貧血": [
  "維生素缺乏性貧血（Vitamin deficiency anemia）",
  "缺鐵性貧血（Iron-deficiency anemia, IDA）",
  "貧血（Anemia）",
  "再生不良性貧血（Aplastic anemia）",
  "鐮刀型細胞貧血症（Sickle-cell anemia, SCA）",
  "地中海型貧血（Thalassemia）"
],
"異常出汗": [
  "多汗症（Hyperhidrosis）",
  "更年期（Perimenopause）"
],
"發抖": [
  "原發性顫抖症（Essential tremor, ET）"
]

};

let currentDiseaseName = '';

// 當網頁載入完畢後
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('symptom');
  const button = document.getElementById('searchBtn');

  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      searchSymptom();
    }
  });

  button.addEventListener('click', function () {
    searchSymptom();
  });
});

// 查詢症狀對應的疾病
function searchSymptom() {
  const symptom = document.getElementById('symptom').value.trim();
  const resultText = document.getElementById('result-text');
  const resultContainer = document.getElementById('result');
  document.getElementById('searchBtn').style.display = 'none';
  resultText.innerHTML = '';
  resultContainer.style.display = 'none';

  if (symptom && symptoms[symptom]) {
    const h4 = document.createElement('h4');
    h4.innerText = '您的症狀對應的疾病可能為:';
    resultText.appendChild(h4);

    symptoms[symptom].forEach(function (diseaseName) {
      const diseaseDiv = document.createElement('div');
      diseaseDiv.className = 'disease-box';
      diseaseDiv.innerText = diseaseName;

      diseaseDiv.addEventListener('click', function () {
        goToStep(3);
        showDiseaseInfo(diseaseName);
      });

      resultText.appendChild(diseaseDiv);
    });

    resultContainer.style.display = 'block';
  } else {
    resultText.innerHTML = '找不到相關疾病。';
    resultContainer.style.display = 'block';
  }

  goToStep(2);
  document.getElementById('symptom').value = '';
}

// 控制頁面步驟切換
function goToStep(stepNumber) {
  // 隱藏所有步驟內容
  document.querySelectorAll('.step-content').forEach(el => {
    el.style.display = 'none';
  });

  // 顯示當前步驟
  const currentStep = document.getElementById(`step-${stepNumber}`);
  if (currentStep) {
    currentStep.style.display = 'block';
  }

  // tab 高亮處理
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  const currentTab = document.getElementById(`tab-${stepNumber}`);
  if (currentTab) {
    currentTab.classList.add('active');
  }

  // ✅ 到第四頁就隱藏「查看治療」按鈕
  const treatmentBtn = document.getElementById('to-treatment-btn');
  if (treatmentBtn) {
    treatmentBtn.style.display = (stepNumber === 3) ? 'inline-block' : 'none';
  }

    // ✅ 控制查詢按鈕：只有第一頁才顯示
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.style.display = (stepNumber === 1) ? 'inline-block' : 'none';
  }
}


// 顯示詳細疾病資料
// 將內容以句號或換行符號分段後用 <br> 連接
function addLineBreaks(text) {
  if (!text) return '';
  return text
    .replace(/([。．；；])/g, '$1<br>')  // 中文句號、分號後加 <br>
    .replace(/\n/g, '<br>')             // 原本就有換行也保留
    .trim();
}


// 顯示疾病資訊並換行
function showDiseaseInfo(diseaseName) {
   currentDiseaseName = diseaseName; // ⭐ 儲存目前疾病名稱
  fetch('diseases.json')
    .then(res => res.json())
    .then(data => {
      const info = data[diseaseName];
      if (info) {
        document.getElementById('disease-name').innerHTML = info.name.replace('(', '<br>(');
document.getElementById('disease-medicine').innerHTML = addLineBreaks(info.medicine);
document.getElementById('disease-department').innerHTML = addLineBreaks(info.department);
        document.getElementById('disease-cause').innerHTML = addLineBreaks(info.cause);
        document.getElementById('disease-symptoms').innerHTML = addLineBreaks(info.symptoms);
        document.getElementById('disease-note').innerHTML = addLineBreaks(info.note);
      } else {
        document.getElementById('disease-name').textContent = '查無資料';
      }
    })
    .catch(error => {
      console.error('讀取 JSON 失敗:', error);
    });
}



document.addEventListener('DOMContentLoaded', function () {
  const treatmentBtn = document.getElementById('to-treatment-btn');
  if (treatmentBtn) {
    treatmentBtn.addEventListener('click', function () {
      goToStep(4); // ➡️ 跳到第四頁
   // ⭐【新增】根據目前疾病名稱顯示該疾病的治療建議
      fetch('diseases.json')
        .then(res => res.json())
        .then(data => {
          const info = data[currentDiseaseName];
          if (info && info.treatment) {
            document.getElementById('disease-treatment').innerHTML = addLineBreaks(info.treatment);
          } else {
            document.getElementById('disease-treatment').innerHTML = '查無治療建議。';
          }
        })
        .catch(error => {
          console.error('讀取治療資訊失敗:', error);
        });
    });
  }
});
