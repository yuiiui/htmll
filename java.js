// 定義症狀對應的疾病清單
const symptoms = {
  "頭痛": [
    "叢集性頭痛 (Cluster headache)",
    "緊張型頭痛 (Tension headache)",
    "藥物過度使用性頭痛 (Medication Overuse headaches, MOH)",
    "鼻竇性頭痛 (Sinus headaches)",
    "慢性日常性頭痛 (Chronic daily headaches)",
    "咳嗽性頭痛 (Cough Headaches)",
    "雷鳴性頭痛 (Thunderclap headaches)"
  ],
  "發燒": [
    "登革熱 (Dengue Fever)",
    "風濕熱 (Rheumatic Fever)",
    "發燒 (Fever)",
    "猩紅熱 (Scarlet Fever)",
    "花粉熱 (Hay Fever)",
    "唇疱疹 (Cold sores)",
    "傷寒 (Typhoid fever)"
  ],
  "疲勞": [
    "肌痛性腦脊髓炎／慢性疲勞症候群 (ME／CFS)",
    "肌無力 (Myasthenia gravis)",
    "支氣管炎 (Bronchitis)",
    "再生不良性貧血 (Aplastic anemia／Aplastic anaemia)",
    "腦震盪症候群 (PPCS)",
    "時差症候群 (Jet lag)"
  ],
  "疲倦": [
    "肌痛性腦脊髓炎／慢性疲勞症候群 (ME／CFS)",
    "肌無力 (Myasthenia gravis)",
    "支氣管炎 (Bronchitis)",
    "再生不良性貧血 (Aplastic anemia／Aplastic anaemia)",
    "腦震盪症候群 (PPCS)",
    "時差症候群 (Jet lag)"
  ],
  "咳嗽": [
    "慢性咳嗽 (Chronic cough)",
    "咳嗽性頭痛 (Cough Headaches)",
    "百日咳 (Whooping cough)",
    "壓力性尿失禁 (Stress incontinence)",
    "感冒 (Common cold)",
    "支氣管炎 (Bronchitis)"
  ],
  "喉嚨痛": [
    "感冒 (Common cold)",
    "猩紅熱 (Scarlet Fever)",
    "咽喉炎 (Sore throat)",
    "扁桃腺炎 (Tonsillitis)"
  ],
  "腹痛": [
    "生理期 (Menstruation)"
  ],
  "失眠": [
    "失眠 (Insomnia)",
    "睡眠障礙 (Sleep disorders)"
  ],
  "癲癇": [
    "自體免疫性腦炎 (Autoimmune epilepsy)",
    "額葉癲癇發作 (Frontal lobe seizures)",
    "癲癇 (Epilepsy)"
  ],
  "手腳麻痺": [
    "格林─巴利症候群 (Guillain-Barre Syndrome)",
    "原發性側索硬化 (Primary lateral sclerosis, PLS)"
  ],
  "關節酸痛": [
    "顳頜關節症 (TMJ)",
    "拇指腕掌關節炎 (Thumb CMC joint arthritis)",
    "薦髂關節炎 (Sacroiliitis)",
    "假性痛風 (Pseudogout)",
    "類風濕性關節炎 (Rheumatoid arthritis)",
    "關節炎 (總稱) (Arthritis)"
  ],
  "腰痛": [
    "薦髂關節炎 (Sacroiliitis)",
    "背痛 (Back Pain)"
  ],
  "背痛": [
    "薦髂關節炎 (Sacroiliitis)",
    "背痛 (Back Pain)"
  ],
  "頭暈": [
    "頭暈 (Dizziness)",
    "良性陣發性位姿勢性暈眩 (BPPV)",
    "外傷後腦脊液滲漏 (CSF leak)",
    "梅尼爾氏症 (Meniere's disease)",
    "低血壓 (Low blood pressure)",
    "低血糖 (Hypoglycemia)",
    "腦震盪 (Concussion)"
  ],
  "腹瀉": [
    "腹瀉 (Diarrhea)",
    "旅行者腹瀉 (Traveler's Diarrhea, TD)",
    "抗生素相關腹瀉 (Antibiotic-associated diarrhea)",
    "桿菌痢疾 (Shigella infection)",
    "顯微鏡性結腸炎 (Microscopic colitis, MC)",
    "霍亂 (Cholera)",
    "食物中毒 (Food Poisoning)"
  ],
  "胸痛": [
    "胸痛 (Chest pain)",
    "軟肋骨炎 (Costochondritis)",
    "急性冠心症／心絞痛 (Unstable Angina Pectoris)",
    "胸膜炎 (Pleurisy)",
    "心肌缺血 (Myocardial ischemia)",
    "食道炎 (Esophagitis)"
  ],
  "嘔吐": [
    "食物中毒 (Food Poisoning)",
    "週期性嘔吐症候群 (Cyclic vomiting syndrome)",
    "孕吐 (Morning sickness)",
    "諾羅病毒 (Norovirus)",
    "偏頭痛 (Migraine)",
    "暴食症／心因性暴食症 (Bulimia nervosa)",
    "輪狀病毒 (Rotavirus, RV)"
  ],
  "貧血": [
    "維生素缺乏性貧血 (Vitamin deficiency anemia)",
    "缺鐵性貧血 (Iron-deficiency anemia, IDA)",
    "貧血 (Anemia)",
    "再生不良性貧血 (Aplastic anemia)",
    "鐮刀型細胞貧血症 (Sickle-cell anemia, SCA)",
    "地中海型貧血 (Thalassemia)"
  ],
  "異常出汗": [
    "多汗症 (Hyperhidrosis)",
    "更年期 (Perimenopause)"
  ],
  "發抖": [
    "原發性顫抖症 (Essential tremor, ET)"
  ]
};

// --- 將所有疾病詳細資料放在這裡，取代原有的 JSON 檔案 ---
const allDiseases = {
  "叢集性頭痛 (Cluster headache)": {
    "name": "叢集性頭痛 (Cluster headache)",
    "note": "通常發生在眼周附近或頭部單側。這種疼痛感十分強烈，是所有頭痛中數一數二劇痛的類型，通常在4～12週內會反覆發作，大多數發作發生在夜間，通常是睡後1至2個小時，會持續數週、甚至數個月之久，然後才慢慢平息。發病期可能會持續一年以上。無痛期可能會持續不到一個月。如果發病期持續一年不緩解，則稱為慢性叢集性頭痛。",
    "department": "神經內科、疼痛科",
    "cause": "最常見的是飲酒，其他誘因可包括天氣變化和某些藥物攝取酒精，特別是紅酒、食用含有硝酸鹽(Nitrates)的加工肉品、缺乏睡眠或睡眠習慣改變、姿勢不良、三餐不正常、壓力過大。",
    "symptoms": "頭部一側疼痛，單次叢集發作。疼痛可在另一次叢集發作中轉換至另一側。\n焦躁不安。\n大量流淚。\n疼痛一側的眼睛發紅。\n疼痛一側鼻塞或流鼻水。\n前額或臉部出汗。\n疼痛一側的臉部皮膚顏色會改變。\n疼痛一側的眼睛周圍腫脹。\n疼痛一側的眼瞼下垂。",
    "medicine": "鈣通道阻斷劑，如維拉帕米（Calan SR、Verelan）通常是預防叢集性頭痛的首選。維拉帕米可能與其他藥物配合使用。多數人服用維拉帕米沒有問題。但副作用可能包括便秘、噁心、疲倦和心跳不規則。\n翠普登(Triptan)類藥物：佐馬止疼(Zolmitriptan) 也可用於舒緩叢發性頭痛，可用鼻噴劑或藥片的形式服用。",
    "treatment": "1 吸氧，通常沒有副作用，但它不適用於嚴重慢性阻塞性肺疾病患者。\n2 曲坦類藥物，舒馬普坦（Imitrex）可在叢集性頭痛症狀開始時注射，也可以將舒馬普坦用作鼻腔噴霧劑，高血壓或心臟病患者不宜服用舒馬普坦。\n3 奧曲肽（Sandostatin）是一種腦荷爾蒙生長抑素的注射劑，對某些叢集性頭痛患者有效。服用曲坦類藥物效果不佳的患者，可以使用這種藥物。\n4 蘇馬止痛（Sumatriptan）注射劑，很常用來治療偏頭痛，也可有效治療嚴重的叢發性頭痛。然而，如果您患有心臟病、或是有高血壓但尚未治療，則不可以使用蘇馬止痛。"
  },
  "緊張型頭痛 (Tension headache)": {
    "name": "緊張型頭痛 (Tension headache)",
    "note": "又稱為「日日疼，Every day headache」。緊張型頭痛會持續發作於頭部兩側，一開始可能會先感覺頸部和肩膀肌肉僵硬，然後僵硬感會慢慢擴散到頭部前側、眼窩和下巴都出現壓迫感。任何年齡層都可能出現這種頭痛，但並不會嚴重到影響日常生活，通常在30分鐘或數天後，症狀就會消失了。可以分為兩大類，—分別是發作性緊張型頭痛和慢性緊張型頭痛。\n發作性緊張型頭痛\n發作性緊張型頭痛可能持續 30 分鐘至 1 週不等。頻繁的發作性緊張型頭痛是指每個月發作時間少於 15 天且至少持續 3 個月，可能變成慢性緊張型頭痛。\n慢性緊張型頭痛\n這種類型的頭痛持續數小時，並且可能是會經常性的。慢性緊張型頭痛每月發生 15 天或更長時間，持續至少三個月。\n緊張型頭痛與偏頭痛\n緊張性頭痛與偏頭痛很難區分，如果您頻繁出現發作性的緊張性頭痛，您可能也有偏頭痛。但是，緊張性頭痛通常不會引起視覺障礙，如看到亮點或閃光。患有緊張性頭痛的人通常不會在頭痛時出現噁心或嘔吐的症狀。身體活動通常會加重偏頭痛，但不會加重緊張性頭痛。緊張性頭痛可能出現畏光或畏聲，但該症狀並不常見。",
    "department": "神經內科",
    "cause": "壓力是緊張型頭痛最常見的誘因。\n攝取酒精，特別是紅酒，或食用含有硝酸鹽（Nitrates）的加工肉品、缺乏睡眠或睡眠習慣改變、姿勢不良、三餐不正常。",
    "symptoms": "頭部鈍性疼痛。前額、兩側和後枕部有繃緊感或壓迫感。\n頭皮、頸部和肩部肌肉有觸痛感。",
    "medicine": "1. 非處方止痛藥通常是緩解疼痛的首選。其中包括阿司匹林、布洛芬（Advil、Motrin IB 等）和萘普生鈉（Aleve）。\n2. 複方藥，阿司匹林或對乙醯氨基酚（泰諾等）往往會與咖啡因或鎮定劑結合成一種藥物。複方藥可能比單一成分止痛藥效果更好。\n3. 曲坦類藥物，對於同時有偏頭痛和發作性緊張型頭痛的人，曲坦類藥物可以有效緩解症狀。",
    "treatment": "做瑜伽、按摩、運動、熱敷前額與頸部\n氧氣治療：戴著面罩呼吸純氧的治療方式。\n蘇馬止疼注射劑(Sumatriptan injections)。\n蘇馬止疼或佐免止疼(Zolmitriptan)鼻噴劑：若不想用注射劑，則可用鼻噴劑的方式取代。"
  },
  "藥物過度使用性頭痛 (Medication Overuse headaches, MOH)": {
    "name": "藥物過度使用性頭痛 (Medication Overuse Headaches, MOH)",
    "note": "每天或幾乎每天發生。這些頭痛通常會使人從睡眠中醒來。偶爾使用止痛藥治療頭痛是可以的，但止痛藥藥效結束後，可能會再次發生。每週使用止痛藥超過幾天的人，可能會患藥物過度使用性頭痛（也稱為反彈性頭痛）。",
    "department": "神經內科、疼痛科",
    "cause": "長期使用治療頭痛（例如偏頭痛）所需的藥物所致，風險因藥物而異，包括：\n純止痛藥：對乙醯氨基酚（Tylenol 等）、（Advil、Motrin IB 等）和萘普生鈉（Aleve）等，使用量超過每日劑量會增加風險。\n複方止痛藥：可在商店購買的咖啡因、阿司匹林和對乙醯氨基酚的複方止痛藥（Excedrin）導致藥物過度使用性頭痛的風險為中度。\n這類藥物還包括含有鎮靜劑布他比妥的複方處方藥（Butapap、Lanorinal 等）。含有布他比妥的藥物導致藥物過度使用性頭痛的風險較高。因此最好不要用此類藥物治療頭痛。\n偏頭痛藥物：用於治療偏頭痛的曲普坦類藥物（Imitrex、Zomig 等）導致藥物過度使用性頭痛的風險較高。麥角二氫麥角胺（Migranal、Trudhesa）導致藥物過度使用性頭痛的風險似乎較低。",
    "symptoms": "噁心。\n躁動。\n難以集中注意力。\n記憶問題。\n易怒。",
    "medicine": "預防性藥物可幫助打破藥物過度使用性頭痛的週期，緩解潛在的頭痛狀況，例如：\n抗癲癇藥，例如托吡酯（Topamax、Qudexy XR 等）。\n三環類抗憂鬱藥，例如阿米替林或去甲替林（Pamelor）。\n鈣通道阻斷劑，例如維拉帕米（Verelan、Verelan PM）。\n如果有偏頭痛史，醫務人員可能會建議注射 CGRP 單株抗體，例如依瑞奈尤單抗（Aimovig）、加卡奈珠單抗（Emgality）。\n",
    "treatment": "打破循環，注射劑\n注射 A 型肉毒桿菌毒素（Botox）可能有助於減少每月頭痛的次數，還可能減輕頭痛的嚴重程度。\n醫務人員可能會使用治療處方來幫助緩解頭痛以及與藥物戒斷相關的副作用。這種治療被稱為橋接或過渡治療。\n治療可能包括非類固醇抗發炎藥、皮質類固醇、神經阻斷劑和抗噁心藥物。\n醫務人員可能會建議透過靜脈接受麥角二氫麥角胺。\n住院治療\n有時，最好在醫院停用止痛藥。如果您存在以下情況，可能需要短期住院：\n出現其他狀況，例如憂鬱症或焦慮症。\n正在服用含有鴉片類成分的高劑量藥物或鎮靜劑布他比妥。\n正在使用鎮靜劑、鴉片類藥物或巴比妥類藥物等。"
  },
  "鼻竇性頭痛 (Sinus headaches)": {
    "name": "鼻竇性頭痛 (Sinus headaches)",
    "note": "鼻竇性頭痛是因鼻腔和鼻竇發炎而引起的頭痛。許多被診斷為鼻竇性頭痛的患者，其實是偏頭痛或其他類型的頭痛。鼻竇性頭痛與偏頭痛的症狀很類似，但治療方式不同。鼻竇性頭痛是少見的，通常發生在鼻竇被感染，引起發炎和充血時。當鼻竇性頭痛得到有效治療後，症狀會被緩解。鼻竇性頭痛患者也會出現偏頭痛的症狀，但很少是鼻竇炎，且鼻竇性頭痛症狀通常會伴隨其他鼻竇炎的症狀。",
    "department": "耳鼻喉科、一般內科",
    "cause": "鼻腔和鼻竇發炎或感染。",
    "symptoms": "鼻竇壓痛、腫脹和充血。\n上臉部有壓力感。\n鼻塞。\n流鼻水。\n發燒。",
    "medicine": "抗生素、鼻噴劑、抗組織胺、類固醇、止痛藥",
    "treatment": "可服用抗生素來治療細菌感染、使用減充血劑或皮質類固醇鼻噴劑、服用抗組織胺來治療過敏、用生理食鹽水清洗鼻竇，或用濕毛巾敷在臉上。若上述方法沒有效，可以考慮內視鏡鼻竇手術。"
  },
  "慢性日常性頭痛 (Chronic daily headaches)": {
    "name": "慢性日常性頭痛 (Chronic daily headaches)",
    "note": "慢性日常性頭痛指每個月發生 15 天或以上，且持續三個月以上的頭痛。可分為：慢性偏頭痛、慢性緊張型頭痛、新發作每日持續性頭痛、藥物過度使用性頭痛。",
    "department": "神經內科、疼痛科",
    "cause": "睡眠障礙、壓力過大、姿勢不良、三餐不正常、過度使用止痛藥。",
    "symptoms": "持續性頭痛、噁心、畏光、畏聲。",
    "medicine": "抗憂鬱藥、抗癲癇藥、肉毒桿菌注射、止痛藥",
    "treatment": "藥物治療：抗憂鬱藥、抗癲癇藥、肉毒桿菌注射。\n改變生活習慣：維持規律睡眠、多運動、注意飲食、做瑜伽。\n輔助治療：物理治療、心理治療。"
  },
  "咳嗽性頭痛 (Cough Headaches)": {
    "name": "咳嗽性頭痛 (Cough Headaches)",
    "note": "咳嗽性頭痛是因咳嗽、打噴嚏、大笑或用力時，頭部短暫而強烈的疼痛。可分為原發性與續發性兩種。原發性咳嗽性頭痛通常無害，但續發性咳嗽性頭痛可能因腦部潛在疾病引起，需進一步檢查。",
    "department": "神經內科",
    "cause": "原發性：原因不明，被認為與腦內壓力變化有關。\n續發性：可能由腦部結構異常引起，例如腦部腫瘤、動脈瘤等。",
    "symptoms": "劇烈、短暫的頭痛，通常在咳嗽、打噴嚏後幾秒鐘內發生，持續數分鐘。",
    "medicine": "吲哚美辛、萘普生",
    "treatment": "藥物治療：吲哚美辛、萘普生。\n手術治療：若頭痛為續發性，可考慮手術移除腦部腫瘤或動脈瘤等。"
  },
  "雷鳴性頭痛 (Thunderclap headaches)": {
    "name": "雷鳴性頭痛 (Thunderclap headaches)",
    "note": "雷鳴性頭痛是突然發生的劇烈頭痛，像打雷一樣，疼痛程度在 1 分鐘內達到最高點，可持續 1 小時到 10 天。雷鳴性頭痛可能是嚴重疾病的徵兆，如腦中風、腦瘤等，需要立即就醫。",
    "department": "急診、神經內科",
    "cause": "腦血管異常、腦部腫瘤、動脈瘤、腦中風、腦出血等。",
    "symptoms": "劇烈、突發的頭痛，伴隨噁心、嘔吐、頸部僵硬、視力模糊、意識改變。",
    "medicine": "止痛藥、血管收縮劑",
    "treatment": "需立即就醫，找出潛在病因並進行治療。治療方式會因病因不同而異，例如手術、藥物治療等。"
  },
  "登革熱 (Dengue Fever)": {
    "name": "登革熱 (Dengue Fever)",
    "note": "登革熱是一種由登革病毒引起的急性傳染病，透過病媒蚊傳播。症狀包括發燒、頭痛、肌肉和關節疼痛、皮疹等。",
    "department": "感染科、家醫科",
    "cause": "登革病毒，經由埃及斑蚊或白線斑蚊傳播。",
    "symptoms": "發燒、頭痛、後眼窩痛、肌肉痠痛、關節痛、紅疹、噁心、嘔吐。",
    "medicine": "沒有特定抗病毒藥物，主要為支持性療法。",
    "treatment": "多休息、補充水分。\n可服用止痛藥來緩解發燒和疼痛。\n注意出血徵兆，若有出血應立即就醫。"
  },
  "風濕熱 (Rheumatic Fever)": {
    "name": "風濕熱 (Rheumatic Fever)",
    "note": "風濕熱是一種由 A 組鏈球菌感染後引起的發炎反應。若未妥善治療，可能導致心臟、關節、腦部等永久性傷害。",
    "department": "風濕免疫科、心臟科、小兒科",
    "cause": "未治療或治療不完全的 A 組鏈球菌感染，例如鏈球菌性咽喉炎。",
    "symptoms": "發燒、關節紅腫熱痛、心臟發炎、皮膚出現環形紅斑、皮下結節、舞蹈症。",
    "medicine": "抗生素、阿司匹林、類固醇",
    "treatment": "使用抗生素根除鏈球菌感染。\n服用阿司匹林或類固醇來控制發炎反應。\n長期抗生素預防復發。"
  },
  "發燒 (Fever)": {
    "name": "發燒 (Fever)",
    "note": "發燒是身體對抗感染或發炎的一種自然反應。通常體溫超過 38°C（100.4°F）就可視為發燒。發燒本身並非疾病，而是某種潛在疾病的症狀。",
    "department": "家醫科、一般內科、小兒科",
    "cause": "感染 (病毒、細菌)、發炎、藥物、中暑、自體免疫疾病等。",
    "symptoms": "體溫升高、畏寒、發抖、出汗、頭痛、肌肉痠痛。",
    "medicine": "退燒藥，如乙醯氨基酚、布洛芬。",
    "treatment": "多休息、補充水分。\n使用退燒藥來緩解不適。\n找出發燒的潛在原因並進行治療。"
  },
  "猩紅熱 (Scarlet Fever)": {
    "name": "猩紅熱 (Scarlet Fever)",
    "note": "猩紅熱是一種由 A 組鏈球菌引起的急性傳染病，常在鏈球菌性咽喉炎後出現。主要影響兒童，會出現紅疹、發燒與喉嚨痛。",
    "department": "感染科、一般內科、小兒科",
    "cause": "由產生毒素的 A 組鏈球菌 (Streptococcus pyogenes) 感染引起。透過飛沫或接觸病患唾液傳播。",
    "symptoms": "喉嚨痛、高燒、草莓舌、臉紅但口周蒼白、胸背紅疹，觸感如砂紙。有時會有頭痛、噁心或腹痛。",
    "medicine": "抗生素為首選治療，常使用青黴素或阿莫西林。若對青黴素過敏，醫師會開立其他替代藥物。",
    "treatment": "完整服用抗生素可避免併發症如風濕熱。適當休息與水分補充有助於康復。感染期內應避免與他人密切接觸以防傳染。"
  },
  "花粉熱 (Hay Fever)": {
    "name": "花粉熱 (Hay Fever)",
    "note": "花粉熱又稱季節性過敏性鼻炎，是對花粉、塵蟎、黴菌等過敏原產生的過敏反應。症狀主要影響鼻子和眼睛。",
    "department": "過敏免疫風濕科、耳鼻喉科",
    "cause": "過敏原 (花粉、塵蟎、黴菌) 刺激免疫系統。",
    "symptoms": "打噴嚏、流鼻水、鼻塞、眼睛癢、流淚、喉嚨癢。",
    "medicine": "抗組織胺、類固醇鼻噴劑、減充血劑",
    "treatment": "避免接觸過敏原。服用抗組織胺藥物。使用類固醇鼻噴劑。嚴重的可考慮脫敏治療。"
  },
  "唇疱疹 (Cold sores)": {
    "name": "唇疱疹 (Cold sores)",
    "note": "唇疱疹是一種由單純疱疹病毒引起的感染，會在嘴唇周圍出現水泡。病毒潛伏在神經中，當免疫力下降時會復發。",
    "department": "皮膚科、家醫科",
    "cause": "單純疱疹病毒 (Herpes simplex virus, HSV-1) 感染。",
    "symptoms": "嘴唇周圍出現水泡、灼熱感、搔癢感、刺痛感。",
    "medicine": "抗病毒藥物，如阿昔洛韋 (Acyclovir)、伐昔洛韋 (Valacyclovir)。",
    "treatment": "服用或塗抹抗病毒藥物。避免觸摸患部，以免傳染給他人或擴散。避免共用餐具、毛巾等個人用品。"
  },
  "傷寒 (Typhoid fever)": {
    "name": "傷寒 (Typhoid fever)",
    "note": "傷寒是由傷寒沙門氏菌引起的腸道傳染病。症狀包括高燒、頭痛、腹痛、腹瀉或便秘等。若未治療可能導致嚴重併發症。",
    "department": "感染科、一般內科",
    "cause": "傷寒沙門氏菌，透過被污染的食物和水傳播。",
    "symptoms": "高燒、頭痛、全身無力、腹痛、腹瀉或便秘、紅疹 (玫瑰疹)。",
    "medicine": "抗生素，如環丙沙星、頭孢曲松。",
    "treatment": "完整服用抗生素療程。多休息、補充水分。注意個人衛生，避免傳染給他人。"
  },
  "肌痛性腦脊髓炎／慢性疲勞症候群 (ME／CFS)": {
    "name": "肌痛性腦脊髓炎／慢性疲勞症候群 (ME／CFS)",
    "note": "一種複雜且長期的疾病，特徵是嚴重疲勞，即使充分休息也無法緩解，並會因身體或精神活動而加劇。",
    "department": "神經內科、風濕免疫科",
    "cause": "病因不明，可能與病毒感染、免疫系統異常、遺傳、壓力等因素有關。",
    "symptoms": "嚴重疲勞、睡眠障礙、認知功能障礙 (記憶力、注意力下降)、肌肉和關節疼痛、頭痛、淋巴結腫大。",
    "medicine": "沒有特定藥物，主要為症狀治療。",
    "treatment": "運動療法：溫和的漸進式運動。認知行為療法：改善對疾病的態度與應對方式。藥物治療：用於緩解疼痛、睡眠障礙等症狀。"
  },
  "肌無力 (Myasthenia gravis)": {
    "name": "肌無力 (Myasthenia gravis)",
    "note": "一種自體免疫疾病，會導致肌肉無力。主要是因為神經與肌肉之間的信號傳導受阻。",
    "department": "神經內科、胸腔內科",
    "cause": "自體免疫反應，產生抗體攻擊神經與肌肉間的受體。",
    "symptoms": "眼瞼下垂、複視、吞嚥困難、說話含糊不清、四肢肌肉無力。",
    "medicine": "乙醯膽鹼酯酶抑制劑、類固醇、免疫抑制劑",
    "treatment": "藥物治療：乙醯膽鹼酯酶抑制劑可增強神經與肌肉間的信號傳導。胸腺切除術：部分患者可透過手術改善症狀。血漿置換術：用於急性惡化時。"
  },
  "支氣管炎 (Bronchitis)": {
    "name": "支氣管炎 (Bronchitis)",
    "note": "支氣管是連接氣管與肺部的管道，支氣管炎是其發炎。可分為急性與慢性。",
    "department": "胸腔內科、家醫科",
    "cause": "急性：通常是病毒感染 (如感冒、流感)。慢性：長期吸菸或接觸刺激物。",
    "symptoms": "咳嗽、咳痰、胸悶、呼吸困難、疲勞、輕微發燒。",
    "medicine": "止咳藥、化痰藥、支氣管擴張劑、抗生素 (若為細菌感染)",
    "treatment": "急性：多休息、補充水分。慢性：戒菸、避免接觸刺激物、使用支氣管擴張劑。"
  },
  "再生不良性貧血 (Aplastic anemia／Aplastic anaemia)": {
    "name": "再生不良性貧血 (Aplastic anemia／Aplastic anaemia)",
    "note": "一種罕見但嚴重的疾病，骨髓無法產生足夠的血球 (紅血球、白血球、血小板)。",
    "department": "血液腫瘤科",
    "cause": "自體免疫反應、病毒感染、藥物、化學物質接觸、遺傳等。",
    "symptoms": "疲勞、蒼白、呼吸急促、反覆感染、出血傾向 (瘀青、流鼻血)。",
    "medicine": "免疫抑制劑、血球生長因子",
    "treatment": "輸血、免疫抑制療法、造血幹細胞移植 (骨髓移植)。"
  },
  "腦震盪症候群 (PPCS)": {
    "name": "腦震盪症候群 (PPCS)",
    "note": "指腦震盪後持續出現的症狀，通常在受傷後幾天或幾週內發生，並可能持續數月或更久。",
    "department": "神經內科、復健科",
    "cause": "腦震盪，輕度腦部創傷。",
    "symptoms": "頭痛、頭暈、疲勞、記憶力或注意力下降、易怒、失眠、對光或聲音敏感。",
    "medicine": "對症治療用藥，如止痛藥、安眠藥。",
    "treatment": "休息、避免過度刺激、循序漸進恢復日常活動。物理治療、認知行為治療。"
  },
  "時差症候群 (Jet lag)": {
    "name": "時差症候群 (Jet lag)",
    "note": "因快速跨越多個時區，導致生理時鐘與當地時間不符，而產生的一系列不適症狀。",
    "department": "家醫科、身心科",
    "cause": "跨時區旅行。",
    "symptoms": "疲勞、失眠、白天嗜睡、注意力不集中、腸胃不適。",
    "medicine": "褪黑激素",
    "treatment": "適應當地作息，白天多接觸陽光。服用褪黑激素來調整睡眠週期。短程旅行時，可維持原時區作息。"
  },
  "慢性咳嗽 (Chronic cough)": {
    "name": "慢性咳嗽 (Chronic cough)",
    "note": "咳嗽持續超過 8 週以上。可能是多種疾病的症狀。",
    "department": "胸腔內科、耳鼻喉科",
    "cause": "鼻涕倒流、氣喘、胃食道逆流、慢性支氣管炎、藥物副作用。",
    "symptoms": "持續性咳嗽。",
    "medicine": "視病因治療，如抗組織胺、類固醇、胃酸抑制劑。",
    "treatment": "找出潛在病因並治療。戒菸。避免接觸刺激物。"
  },
  "百日咳 (Whooping cough)": {
    "name": "百日咳 (Whooping cough)",
    "note": "由百日咳桿菌引起的呼吸道傳染病。特徵是劇烈的陣發性咳嗽，咳嗽結束時會有類似「雞啼」的吸氣聲。",
    "department": "感染科、小兒科",
    "cause": "百日咳桿菌感染。",
    "symptoms": "初期類似感冒，後期出現劇烈陣發性咳嗽、咳嗽後嘔吐、吸氣時發出「雞啼」聲。",
    "medicine": "抗生素，如紅黴素、阿奇黴素。",
    "treatment": "完整服用抗生素療程。隔離病患以防傳染。提供支持性治療，如氧氣。"
  },
  "壓力性尿失禁 (Stress incontinence)": {
    "name": "壓力性尿失禁 (Stress incontinence)",
    "note": "當腹部壓力增加時 (如咳嗽、打噴嚏、大笑、提重物)，尿液不自主漏出。",
    "department": "婦產科、泌尿科",
    "cause": "骨盆底肌肉無力、尿道括約肌功能異常。",
    "symptoms": "咳嗽、打噴嚏、大笑時，尿液不自主漏出。",
    "medicine": "無特定藥物，可使用骨盆底肌肉運動。",
    "treatment": "凱格爾運動 (骨盆底肌肉運動)。物理治療。嚴重的可考慮手術治療。"
  },
  "生理期 (Menstruation)": {
    "name": "生理期 (Menstruation)",
    "note": "指女性子宮內膜周期性脫落並伴隨出血的生理現象。可能伴隨腹痛、情緒波動等不適。",
    "department": "婦產科",
    "cause": "女性賀爾蒙週期性變化。",
    "symptoms": "腹痛、腹脹、情緒波動、乳房脹痛、疲勞。",
    "medicine": "非類固醇抗發炎藥物 (NSAIDs)，如布洛芬，可緩解疼痛。",
    "treatment": "熱敷腹部、適度運動。服用止痛藥。嚴重不適可諮詢醫師。"
  },
  "失眠 (Insomnia)": {
    "name": "失眠 (Insomnia)",
    "note": "指難以入睡、維持睡眠或過早醒來，導致白天精神不佳。失眠可以分為急性或慢性。",
    "department": "身心科、神經內科",
    "cause": "壓力、焦慮、憂鬱、不良睡眠習慣、藥物、疾病等。",
    "symptoms": "難以入睡、睡眠品質差、白天疲勞、注意力不集中、易怒。",
    "medicine": "安眠藥、抗憂鬱藥",
    "treatment": "認知行為療法 (CBT-I)：改善睡眠習慣與想法。維持規律作息、避免咖啡因。嚴重者可考慮藥物治療。"
  },
  "睡眠障礙 (Sleep disorders)": {
    "name": "睡眠障礙 (Sleep disorders)",
    "note": "影響睡眠品質、時間或效率的一系列疾病。包括失眠、睡眠呼吸中止症、嗜睡症等。",
    "department": "身心科、神經內科",
    "cause": "多種原因，包括生理、心理、環境因素。",
    "symptoms": "白天嗜睡、失眠、睡眠中異常行為。",
    "medicine": "視具體疾病而定。",
    "treatment": "視具體疾病而定。例如：睡眠呼吸中止症可使用 CPAP 呼吸器。嗜睡症可使用興奮劑。"
  },
  "自體免疫性腦炎 (Autoimmune epilepsy)": {
    "name": "自體免疫性腦炎 (Autoimmune epilepsy)",
    "note": "因免疫系統攻擊腦部細胞而引起的癲癇。症狀可能包括癲癇發作、認知功能下降、精神行為改變等。",
    "department": "神經內科、免疫風濕科",
    "cause": "免疫系統產生自體抗體攻擊腦部細胞。",
    "symptoms": "癲癇發作、記憶力減退、幻覺、妄想。",
    "medicine": "免疫抑制劑、抗癲癇藥物",
    "treatment": "免疫療法，如類固醇、靜脈注射免疫球蛋白。抗癲癇藥物控制癲癇發作。"
  },
  "額葉癲癇發作 (Frontal lobe seizures)": {
    "name": "額葉癲癇發作 (Frontal lobe seizures)",
    "note": "癲癇發作源自大腦額葉，可能導致不尋常的動作或行為，常發生在夜間睡眠中。通常發作時間短。",
    "department": "神經內科",
    "cause": "腦部額葉異常放電。",
    "symptoms": "不自主動作、大叫、雙腳踢踏、身體僵硬。",
    "medicine": "抗癲癇藥物",
    "treatment": "服用抗癲癇藥物。若藥物無效，可考慮手術切除病灶。"
  },
  "癲癇 (Epilepsy)": {
    "name": "癲癇 (Epilepsy)",
    "note": "一種慢性神經系統疾病，特徵是反覆發作的癲癇，通常無法預測。發作時大腦會出現短暫、異常的電氣活動。",
    "department": "神經內科",
    "cause": "腦部結構異常、遺傳、頭部外傷、腦中風、感染等。",
    "symptoms": "發作時可能出現意識喪失、抽搐、感覺異常、行為改變。",
    "medicine": "抗癲癇藥物如帝拔癲、優閒（Levetiracetam）",
    "treatment": "服用抗癲癇藥物控制發作。若藥物無效，可考慮手術、生酮飲食、迷走神經刺激術。"
  },
  "格林─巴利症候群 (Guillain-Barre Syndrome)": {
    "name": "格林─巴利症候群 (Guillain-Barre Syndrome)",
    "note": "一種罕見的周邊神經系統自體免疫疾病，會導致肌肉無力或麻痺，通常從腳部開始，向上蔓延。",
    "department": "神經內科、急診",
    "cause": "免疫系統錯誤攻擊周邊神經。",
    "symptoms": "手腳麻痺、無力，從腳部開始向上蔓延。呼吸困難、吞嚥困難、心跳不規則。",
    "medicine": "無特定藥物。",
    "treatment": "血漿置換術：移除血液中的有害抗體。靜脈注射免疫球蛋白 (IVIg)：提供健康的抗體。呼吸支持：若呼吸肌肉受影響，需使用呼吸器。"
  },
  "原發性側索硬化 (Primary lateral sclerosis, PLS)": {
    "name": "原發性側索硬化 (Primary lateral sclerosis, PLS)",
    "note": "一種罕見的運動神經元疾病，主要影響控制自願性動作的運動神經元。它會導致肌肉無力、僵硬、萎縮。",
    "department": "神經內科",
    "cause": "病因不明。",
    "symptoms": "肌肉無力、僵硬、痙攣，通常從腿部開始，逐漸蔓延至全身。吞嚥或說話困難。",
    "medicine": "目前無有效藥物，只能緩解症狀。",
    "treatment": "物理治療、職能治療：幫助維持肌肉力量與功能。藥物：用於緩解肌肉痙攣或疼痛。"
  },
  "顳頜關節症 (TMJ)": {
    "name": "顳頜關節症 (TMJ)",
    "note": "指顳頜關節及其周圍肌肉的疼痛和功能障礙。症狀包括下巴疼痛、頭痛、頸部疼痛等。",
    "department": "牙科、口腔外科、復健科",
    "cause": "咬合不正、磨牙、壓力、外傷等。",
    "symptoms": "下巴疼痛、咀嚼困難、關節發出聲響、頭痛、頸部疼痛。",
    "medicine": "非類固醇抗發炎藥物、肌肉鬆弛劑",
    "treatment": "熱敷、冰敷、避免硬食、戴咬合板。物理治療、按摩。嚴重者可考慮手術。"
  },
  "拇指腕掌關節炎 (Thumb CMC joint arthritis)": {
    "name": "拇指腕掌關節炎 (Thumb CMC joint arthritis)",
    "note": "指拇指根部的腕掌關節 (CMC) 發炎，導致疼痛、無力和活動受限。是手部最常見的關節炎之一。",
    "department": "骨科、復健科、風濕免疫科",
    "cause": "關節軟骨磨損、年齡老化、過度使用。",
    "symptoms": "拇指根部疼痛、腫脹、無力、抓握物品困難。",
    "medicine": "止痛藥、類固醇注射",
    "treatment": "休息、戴護具。物理治療。嚴重者可考慮手術。"
  },
  "薦髂關節炎 (Sacroiliitis)": {
    "name": "薦髂關節炎 (Sacroiliitis)",
    "note": "指薦髂關節 (連接脊椎與骨盆的關節) 的發炎。症狀包括腰痛、臀部疼痛，疼痛可能蔓延至腿部。",
    "department": "骨科、復健科、風濕免疫科",
    "cause": "外傷、懷孕、類風濕性關節炎、僵直性脊椎炎。",
    "symptoms": "腰痛、臀部疼痛、腿部麻木或無力。",
    "medicine": "非類固醇抗發炎藥物、肌肉鬆弛劑",
    "treatment": "物理治療、按摩、熱敷。類固醇注射。嚴重者可考慮手術。"
  },
  "假性痛風 (Pseudogout)": {
    "name": "假性痛風 (Pseudogout)",
    "note": "因關節內堆積焦磷酸鈣晶體而引起的急性關節炎。症狀類似痛風，但發作的關節不同，多發生在膝蓋、手腕、肩部。",
    "department": "風濕免疫科",
    "cause": "焦磷酸鈣晶體堆積。",
    "symptoms": "關節紅腫熱痛、活動受限。",
    "medicine": "非類固醇抗發炎藥物、類固醇、秋水仙素",
    "treatment": "藥物治療。關節抽液，將晶體移除。"
  },
  "類風濕性關節炎 (Rheumatoid arthritis)": {
    "name": "類風濕性關節炎 (Rheumatoid arthritis)",
    "note": "一種自體免疫疾病，會導致關節發炎、疼痛、腫脹，並可能導致關節變形。通常影響手部、腳部的關節。",
    "department": "風濕免疫科",
    "cause": "免疫系統攻擊自身關節。",
    "symptoms": "關節紅腫熱痛、晨僵、疲勞、發燒。",
    "medicine": "非類固醇抗發炎藥物、類固醇、疾病修飾抗風濕藥物 (DMARDs)",
    "treatment": "藥物治療。物理治療、職能治療。嚴重者可考慮手術。"
  },
  "關節炎 (總稱) (Arthritis)": {
    "name": "關節炎 (總稱) (Arthritis)",
    "note": "指關節的發炎。有多種類型，包括骨關節炎、類風濕性關節炎、痛風等。",
    "department": "骨科、風濕免疫科",
    "cause": "關節磨損、自體免疫、感染、結晶沉積。",
    "symptoms": "關節疼痛、僵硬、腫脹、活動受限。",
    "medicine": "視病因治療，如止痛藥、類固醇、DMARDs。",
    "treatment": "藥物治療。物理治療、體重控制。嚴重者可考慮手術。"
  },
  "背痛 (Back Pain)": {
    "name": "背痛 (Back Pain)",
    "note": "常見的症狀，可能由多種原因引起，包括肌肉拉傷、椎間盤突出、姿勢不良等。可分為急性或慢性。",
    "department": "復健科、骨科",
    "cause": "肌肉拉傷、椎間盤突出、姿勢不良、關節炎、脊椎狹窄。",
    "symptoms": "背部疼痛、僵硬、活動受限、肌肉痙攣。",
    "medicine": "止痛藥、肌肉鬆弛劑",
    "treatment": "休息、熱敷、按摩。物理治療。嚴重者可考慮手術。"
  },
  "頭暈 (Dizziness)": {
    "name": "頭暈 (Dizziness)",
    "note": "指感覺自身或周圍環境在旋轉或移動的感覺。可能是多種疾病的症狀，需找出潛在原因。",
    "department": "耳鼻喉科、神經內科",
    "cause": "耳石脫落症、梅尼爾氏症、低血壓、中風、腦部腫瘤。",
    "symptoms": "頭暈、天旋地轉、噁心、嘔吐、失去平衡感。",
    "medicine": "視病因治療。",
    "treatment": "休息、避免快速轉頭。耳石復位術。藥物治療。"
  },
  "良性陣發性位姿勢性暈眩 (BPPV)": {
    "name": "良性陣發性位姿勢性暈眩 (BPPV)",
    "note": "一種最常見的眩暈，當頭部快速改變姿勢時 (如躺下、翻身、抬頭) 會發生短暫的眩暈。是由內耳的耳石脫落所致。",
    "department": "耳鼻喉科",
    "cause": "內耳耳石脫落，在半規管內游移。",
    "symptoms": "短暫的天旋地轉、噁心、嘔吐、失去平衡感。",
    "medicine": "無特定藥物，可使用鎮靜劑。",
    "treatment": "耳石復位術 (Epley maneuver)：將耳石導回正確位置。"
  },
  "外傷後腦脊液滲漏 (CSF leak)": {
    "name": "外傷後腦脊液滲漏 (CSF leak)",
    "note": "因頭部外傷導致腦脊液從腦部滲漏出來，可能經由鼻子或耳朵流出。會導致頭痛、頭暈、噁心等症狀。",
    "department": "神經外科、耳鼻喉科",
    "cause": "頭部外傷、手術、自發性。",
    "symptoms": "姿勢性頭痛、頭暈、流鼻水、耳鳴、聽力下降。",
    "medicine": "無特定藥物。",
    "treatment": "臥床休息、避免出力。若無法自行癒合，可考慮手術修補。"
  },
  "梅尼爾氏症 (Meniere's disease)": {
    "name": "梅尼爾氏症 (Meniere's disease)",
    "note": "一種內耳疾病，特徵是反覆發作的眩暈、耳鳴、聽力下降和耳脹感。發作持續時間從數分鐘到數小時不等。",
    "department": "耳鼻喉科",
    "cause": "內耳淋巴液過多，導致內耳壓力升高。",
    "symptoms": "眩暈、耳鳴、聽力下降、耳脹感。",
    "medicine": "利尿劑、鎮靜劑、止暈藥",
    "treatment": "低鹽飲食、避免咖啡因。藥物治療。嚴重者可考慮中耳注射類固醇或手術。"
  },
  "低血壓 (Low blood pressure)": {
    "name": "低血壓 (Low blood pressure)",
    "note": "指血壓低於正常值。當血壓過低時，可能導致頭暈、昏厥、疲勞等症狀。",
    "department": "家醫科、心臟科",
    "cause": "脫水、藥物、心臟疾病、內分泌疾病、嚴重感染。",
    "symptoms": "頭暈、昏厥、疲勞、視力模糊、噁心。",
    "medicine": "升壓藥",
    "treatment": "補充水分、增加鹽分攝取、避免久站。找出潛在病因並治療。"
  },
  "低血糖 (Hypoglycemia)": {
    "name": "低血糖 (Hypoglycemia)",
    "note": "指血液中的葡萄糖濃度過低。常發生在糖尿病患者，但非糖尿病患者也可能發生。",
    "department": "新陳代謝科、家醫科",
    "cause": "飲食不規律、藥物、過度運動、酒精。",
    "symptoms": "頭暈、發抖、出汗、心悸、飢餓感、意識改變。",
    "medicine": "口服葡萄糖、胰島素",
    "treatment": "立即補充含糖食物或飲料。找出潛在病因並調整生活習慣。"
  },
  "腦震盪 (Concussion)": {
    "name": "腦震盪 (Concussion)",
    "note": "因頭部受到撞擊或搖晃，導致大腦功能暫時性受損。通常不伴隨明顯的腦部結構損傷。",
    "department": "神經外科、急診",
    "cause": "頭部受到撞擊或搖晃。",
    "symptoms": "頭痛、頭暈、噁心、記憶力減退、注意力不集中、疲勞。",
    "medicine": "止痛藥",
    "treatment": "休息、避免過度刺激。循序漸進恢復日常活動。若症狀持續，需進一步檢查。"
  },
  "腹瀉 (Diarrhea)": {
    "name": "腹瀉 (Diarrhea)",
    "note": "指排便次數增加，糞便呈現稀爛或水狀。可能導致脫水。",
    "department": "腸胃內科、家醫科",
    "cause": "病毒感染、細菌感染、食物中毒、乳糖不耐症、腸躁症。",
    "symptoms": "排便次數增加、腹痛、腹脹、噁心、嘔吐。",
    "medicine": "止瀉藥、益生菌",
    "treatment": "補充水分、電解質。避免高纖維、高脂肪食物。找出潛在病因並治療。"
  },
  "旅行者腹瀉 (Traveler's Diarrhea, TD)": {
    "name": "旅行者腹瀉 (Traveler's Diarrhea, TD)",
    "note": "在旅行中因食用被污染的食物或水而引起的腹瀉。通常是良性的，會在幾天內自行好轉。",
    "department": "腸胃內科、家醫科",
    "cause": "細菌感染，如大腸桿菌。",
    "symptoms": "腹瀉、腹痛、噁心、嘔吐、發燒。",
    "medicine": "止瀉藥、抗生素",
    "treatment": "補充水分、電解質。避免生食、飲用未煮沸的水。若症狀嚴重，可服用抗生素。"
  },
  "抗生素相關腹瀉 (Antibiotic-associated diarrhea)": {
    "name": "抗生素相關腹瀉 (Antibiotic-associated diarrhea)",
    "note": "服用抗生素後引起的腹瀉。通常是因抗生素破壞腸道菌叢，導致有害細菌 (如艱難梭菌) 增生。",
    "department": "腸胃內科",
    "cause": "抗生素使用。",
    "symptoms": "腹瀉、腹痛、發燒。",
    "medicine": "停止使用抗生素、口服萬古黴素",
    "treatment": "停止使用抗生素。服用益生菌。若為艱難梭菌感染，需服用萬古黴素。"
  },
  "桿菌痢疾 (Shigella infection)": {
    "name": "桿菌痢疾 (Shigella infection)",
    "note": "由痢疾桿菌引起的急性腸道傳染病。症狀包括腹瀉、腹痛、發燒、血便。",
    "department": "感染科、腸胃內科",
    "cause": "痢疾桿菌，透過被污染的食物和水傳播。",
    "symptoms": "腹瀉、腹痛、發燒、血便、脫水。",
    "medicine": "抗生素",
    "treatment": "服用抗生素。補充水分、電解質。注意個人衛生，避免傳染給他人。"
  },
  "顯微鏡性結腸炎 (Microscopic colitis, MC)": {
    "name": "顯微鏡性結腸炎 (Microscopic colitis, MC)",
    "note": "一種慢性腹瀉，診斷需透過大腸鏡切片檢查。特徵是腸道黏膜發炎，但在大腸鏡下肉眼看起來正常。",
    "department": "腸胃內科",
    "cause": "病因不明，可能與自體免疫、藥物、遺傳有關。",
    "symptoms": "慢性水樣腹瀉、腹痛。",
    "medicine": "皮質類固醇、免疫抑制劑",
    "treatment": "避免服用非類固醇抗發炎藥物。藥物治療。低脂、低纖飲食。"
  },
  "霍亂 (Cholera)": {
    "name": "霍亂 (Cholera)",
    "note": "由霍亂弧菌引起的急性腸道傳染病。特徵是嚴重的米湯樣腹瀉，可導致迅速脫水和死亡。",
    "department": "感染科、急診",
    "cause": "霍亂弧菌，透過被污染的食物和水傳播。",
    "symptoms": "米湯樣腹瀉、嘔吐、脫水、肌肉痙攣。",
    "medicine": "抗生素",
    "treatment": "立即補充大量水分、電解質。服用抗生素。隔離病患以防傳染。"
  },
  "食物中毒 (Food Poisoning)": {
    "name": "食物中毒 (Food Poisoning)",
    "note": "因食用被細菌、病毒或毒素污染的食物而引起的疾病。症狀通常在食用後數小時內發生。",
    "department": "腸胃內科、家醫科",
    "cause": "細菌、病毒、毒素污染食物。",
    "symptoms": "噁心、嘔吐、腹痛、腹瀉、發燒。",
    "medicine": "止吐藥、止瀉藥",
    "treatment": "補充水分、電解質。多休息。若症狀嚴重，需就醫治療。"
  },
  "胸痛 (Chest pain)": {
    "name": "胸痛 (Chest pain)",
    "note": "胸痛是常見的症狀，可能由多種原因引起，包括心臟、肺部、食道、肌肉骨骼等問題。有些胸痛是緊急狀況，需立即就醫。",
    "department": "急診、心臟科、胸腔內科",
    "cause": "心肌梗塞、心絞痛、主動脈剝離、肺栓塞、胸膜炎、胃食道逆流。",
    "symptoms": "胸部壓迫感、刺痛、灼熱感，可能伴隨呼吸困難、噁心、出汗。",
    "medicine": "視病因治療。",
    "treatment": "若胸痛劇烈、持續，應立即撥打急救電話。治療會因潛在病因不同而異。"
  },
  "軟肋骨炎 (Costochondritis)": {
    "name": "軟肋骨炎 (Costochondritis)",
    "note": "指胸骨與肋骨交界處的軟骨發炎。症狀為胸痛，通常在按壓患部或深呼吸時加劇。",
    "department": "復健科、骨科",
    "cause": "外傷、過度使用、病毒感染。",
    "symptoms": "胸部刺痛、壓痛，通常在按壓患部或深呼吸時加劇。",
    "medicine": "非類固醇抗發炎藥物",
    "treatment": "熱敷、冰敷、休息、避免劇烈運動。服用止痛藥。"
  },
  "急性冠心症／心絞痛 (Unstable Angina Pectoris)": {
    "name": "急性冠心症／心絞痛 (Unstable Angina Pectoris)",
    "note": "心絞痛的一種，症狀比穩定型心絞痛嚴重，發作時間長，可能在休息時發生。是心肌梗塞的前兆。",
    "department": "急診、心臟科",
    "cause": "冠狀動脈阻塞，導致心肌缺氧。",
    "symptoms": "胸部壓迫感、胸痛，可能蔓延至頸部、下巴、手臂。",
    "medicine": "硝酸甘油、抗血小板藥物、抗凝血劑",
    "treatment": "立即就醫。藥物治療。嚴重者可考慮心導管手術。"
  },
  "胸膜炎 (Pleurisy)": {
    "name": "胸膜炎 (Pleurisy)",
    "note": "指覆蓋肺部與胸腔的胸膜發炎。症狀為胸痛，通常在呼吸、咳嗽或打噴嚏時加劇。",
    "department": "胸腔內科、感染科",
    "cause": "病毒或細菌感染、肺栓塞、自體免疫疾病。",
    "symptoms": "呼吸時胸部刺痛、發燒、咳嗽、呼吸急促。",
    "medicine": "止痛藥、抗生素",
    "treatment": "治療潛在病因。服用止痛藥。若有肋膜積液，需引流。"
  },
  "心肌缺血 (Myocardial ischemia)": {
    "name": "心肌缺血 (Myocardial ischemia)",
    "note": "指心臟肌肉的血液供應不足。可能是心臟病、心絞痛的前兆。",
    "department": "心臟科",
    "cause": "冠狀動脈硬化，導致血流受阻。",
    "symptoms": "胸痛、呼吸急促、出汗、噁心、嘔吐。",
    "medicine": "硝酸甘油、抗血小板藥物、降血脂藥物",
    "treatment": "藥物治療。生活習慣改變，如戒菸、健康飲食。嚴重者可考慮心導管手術。"
  },
  "食道炎 (Esophagitis)": {
    "name": "食道炎 (Esophagitis)",
    "note": "指食道發炎。可能因胃酸逆流、藥物副作用、感染等引起。",
    "department": "腸胃內科",
    "cause": "胃食道逆流、藥物副作用、感染、過敏。",
    "symptoms": "胸部灼熱感、吞嚥困難、吞嚥疼痛、噁心。",
    "medicine": "胃酸抑制劑、抗生素",
    "treatment": "治療潛在病因。避免刺激性食物。改變飲食習慣，如少量多餐。"
  },
  "週期性嘔吐症候群 (Cyclic vomiting syndrome)": {
    "name": "週期性嘔吐症候群 (Cyclic vomiting syndrome)",
    "note": "一種罕見疾病，特徵是反覆發作、長達數天的嚴重嘔吐，兩次發作之間沒有症狀。常在兒童中發生。",
    "department": "腸胃內科、神經內科",
    "cause": "病因不明，可能與偏頭痛、精神壓力有關。",
    "symptoms": "反覆、嚴重的嘔吐、噁心、腹痛、發燒。",
    "medicine": "止吐藥、抗偏頭痛藥物、鎮靜劑",
    "treatment": "藥物治療。避免誘發因素，如壓力、特定食物。維持水分補充。"
  },
  "孕吐 (Morning sickness)": {
    "name": "孕吐 (Morning sickness)",
    "note": "懷孕初期常見的噁心和嘔吐症狀。雖然稱為「孕吐」，但可能發生在一天中的任何時間。",
    "department": "婦產科",
    "cause": "懷孕期間賀爾蒙變化。",
    "symptoms": "噁心、嘔吐、食慾不振。",
    "medicine": "止吐藥、維生素 B6",
    "treatment": "少量多餐、避免油膩食物。補充水分。若症狀嚴重，可考慮藥物治療。"
  },
  "諾羅病毒 (Norovirus)": {
    "name": "諾羅病毒 (Norovirus)",
    "note": "一種高傳染性的病毒，會引起腸胃炎。症狀包括嘔吐、腹瀉、腹痛。主要經由被污染的食物、水或接觸傳染。",
    "department": "感染科、腸胃內科",
    "cause": "諾羅病毒感染。",
    "symptoms": "噁心、嘔吐、腹瀉、腹痛、輕微發燒。",
    "medicine": "無特定藥物。",
    "treatment": "補充水分、電解質。多休息。注意個人衛生，勤洗手。"
  },
  "偏頭痛 (Migraine)": {
    "name": "偏頭痛 (Migraine)",
    "note": "一種常見的頭痛類型，特徵是反覆發作的頭痛，通常伴隨噁心、嘔吐、對光或聲音敏感。",
    "department": "神經內科",
    "cause": "病因不明，可能與遺傳、腦部神經傳導物質異常有關。",
    "symptoms": "單側或雙側搏動性頭痛、噁心、嘔吐、畏光、畏聲。",
    "medicine": "止痛藥、曲坦類藥物、預防性藥物",
    "treatment": "休息、待在安靜黑暗的環境。藥物治療。避免誘發因素，如壓力、特定食物。"
  },
  "暴食症／心因性暴食症 (Bulimia nervosa)": {
    "name": "暴食症／心因性暴食症 (Bulimia nervosa)",
    "note": "一種飲食失調症，特徵是反覆暴食後，會採取不健康的補償行為，如催吐、過度運動或使用瀉藥。",
    "department": "身心科",
    "cause": "多種原因，包括心理、社會、遺傳因素。",
    "symptoms": "暴食後催吐、使用瀉藥、過度運動、體重波動、對體重和體型過度關注。",
    "medicine": "抗憂鬱藥物",
    "treatment": "心理治療 (認知行為療法)。營養諮詢。藥物治療。"
  },
  "輪狀病毒 (Rotavirus, RV)": {
    "name": "輪狀病毒 (Rotavirus, RV)",
    "note": "一種病毒，是嬰幼兒急性腸胃炎最常見的原因。特徵是嚴重的嘔吐和腹瀉，可導致脫水。",
    "department": "感染科、小兒科",
    "cause": "輪狀病毒感染。",
    "symptoms": "嘔吐、水樣腹瀉、發燒、腹痛。",
    "medicine": "無特定藥物。",
    "treatment": "補充水分、電解質。多休息。接種疫苗是預防的最佳方法。"
  },
  "維生素缺乏性貧血 (Vitamin deficiency anemia)": {
    "name": "維生素缺乏性貧血 (Vitamin deficiency anemia)",
    "note": "因缺乏維生素 B12 或葉酸而引起的貧血。維生素 B12 缺乏可能導致神經系統問題。",
    "department": "血液腫瘤科、家醫科",
    "cause": "維生素 B12 或葉酸攝取不足或吸收不良。",
    "symptoms": "疲勞、蒼白、呼吸急促、頭暈、舌頭發炎。",
    "medicine": "維生素 B12 注射或口服、葉酸補充劑",
    "treatment": "補充維生素。找出潛在病因並治療。"
  },
  "缺鐵性貧血 (Iron-deficiency anemia, IDA)": {
    "name": "缺鐵性貧血 (Iron-deficiency anemia, IDA)",
    "note": "最常見的貧血類型，因體內鐵質不足而導致紅血球減少。",
    "department": "血液腫瘤科、家醫科",
    "cause": "鐵質攝取不足、消化道出血、經血過多、懷孕。",
    "symptoms": "疲勞、蒼白、呼吸急促、心悸、頭暈。",
    "medicine": "鐵劑補充劑",
    "treatment": "服用鐵劑補充劑。找出潛在出血原因並治療。飲食調整，多攝取含鐵食物。"
  },
  "貧血 (Anemia)": {
    "name": "貧血 (Anemia)",
    "note": "指血液中紅血球數量或血紅素濃度低於正常值。是多種疾病的症狀。",
    "department": "血液腫瘤科、家醫科",
    "cause": "多種原因，包括缺鐵、維生素缺乏、慢性疾病、遺傳性疾病。",
    "symptoms": "疲勞、蒼白、呼吸急促、心悸、頭暈。",
    "medicine": "視病因治療。",
    "treatment": "找出潛在病因並治療。輸血。補充鐵質、維生素等。"
  },
  "再生不良性貧血 (Aplastic anemia)": {
    "name": "再生不良性貧血 (Aplastic anemia)",
    "note": "一種罕見但嚴重的疾病，骨髓無法產生足夠的血球 (紅血球、白血球、血小板)。",
    "department": "血液腫瘤科",
    "cause": "自體免疫反應、病毒感染、藥物、化學物質接觸、遺傳等。",
    "symptoms": "疲勞、蒼白、呼吸急促、反覆感染、出血傾向 (瘀青、流鼻血)。",
    "medicine": "免疫抑制劑、血球生長因子",
    "treatment": "輸血、免疫抑制療法、造血幹細胞移植 (骨髓移植)。"
  },
  "鐮刀型細胞貧血症 (Sickle-cell anemia, SCA)": {
    "name": "鐮刀型細胞貧血症 (Sickle-cell anemia, SCA)",
    "note": "一種遺傳性血液疾病，紅血球形狀異常，像鐮刀一樣。會導致紅血球破壞，引起貧血和血管阻塞。",
    "department": "血液腫瘤科",
    "cause": "遺傳性基因突變。",
    "symptoms": "疲勞、疼痛危機 (血管阻塞引起的劇痛)、感染、脾臟腫大。",
    "medicine": "羥基尿素、止痛藥",
    "treatment": "輸血、藥物治療。預防感染。骨髓移植。"
  },
  "地中海型貧血 (Thalassemia)": {
    "name": "地中海型貧血 (Thalassemia)",
    "note": "一種遺傳性血液疾病，因血紅素合成異常，導致紅血球壽命短、容易破壞。可分為輕、中、重度。",
    "department": "血液腫瘤科",
    "cause": "遺傳性基因突變。",
    "symptoms": "疲勞、蒼白、黃疸、脾臟腫大、骨骼變形。",
    "medicine": "輸血、排鐵劑",
    "treatment": "定期輸血。使用排鐵劑，避免鐵質過度堆積。骨髓移植。"
  },
  "多汗症 (Hyperhidrosis)": {
    "name": "多汗症 (Hyperhidrosis)",
    "note": "指異常或過度出汗，通常發生在手掌、腳底、腋下、臉部。可能影響社交和生活品質。",
    "department": "皮膚科",
    "cause": "原因不明，可能與神經系統過度活躍有關。",
    "symptoms": "過度出汗，即使在沒有運動或高溫的環境下。",
    "medicine": "外用止汗劑、口服抗膽鹼藥、肉毒桿菌注射",
    "treatment": "外用止汗劑。肉毒桿菌注射。離子導入療法。嚴重者可考慮手術 (內視鏡胸椎交感神經切除術)。"
  },
  "更年期 (Perimenopause)": {
    "name": "更年期 (Perimenopause)",
    "note": "指女性從有月經到停經的過渡時期。通常發生在 40 歲後，持續數年。",
    "department": "婦產科",
    "cause": "卵巢功能逐漸衰退，雌激素分泌減少。",
    "symptoms": "熱潮紅、夜間盜汗、情緒波動、失眠、月經週期不規則。",
    "medicine": "荷爾蒙補充療法、抗憂鬱藥物",
    "treatment": "荷爾蒙補充療法。改變生活習慣，如健康飲食、適度運動。嚴重不適可諮詢醫師。"
  },
  "原發性顫抖症 (Essential tremor, ET)": {
    "name": "原發性顫抖症 (Essential tremor, ET)",
    "note": "一種神經系統疾病，特徵是身體部位 (通常是手部) 不自主的顫抖。顫抖通常在做動作時更明顯。",
    "department": "神經內科",
    "cause": "病因不明，可能與遺傳有關。",
    "symptoms": "手部、頭部、聲音不自主的顫抖。在做動作或寫字時更明顯。",
    "medicine": "普萘洛爾、普里米酮、肉毒桿菌注射",
    "treatment": "藥物治療。物理治療、職能治療。嚴重者可考慮深部腦部刺激術 (DBS)。"
  }
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

  // 監聽治療按鈕
  const treatmentBtn = document.getElementById('to-treatment-btn');
  if (treatmentBtn) {
    treatmentBtn.addEventListener('click', function () {
      goToStep(4);
      showTreatmentInfo(); // 呼叫顯示治療建議的函式
    });
  }
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
    .replace(/([。．；])/g, '$1<br>')
    .replace(/\n/g, '<br>')
    .trim();
}

// 函式：顯示疾病資訊
function showDiseaseInfo(diseaseName) {
  currentDiseaseName = diseaseName;
  // 直接從 allDiseases 物件中讀取資料
  const info = allDiseases[diseaseName];
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
}

// 新增函式：顯示治療建議
function showTreatmentInfo() {
  const info = allDiseases[currentDiseaseName];
  if (info && info.treatment) {
    document.getElementById('disease-treatment').innerHTML = addLineBreaks(info.treatment);
  } else {
    document.getElementById('disease-treatment').innerHTML = '查無治療建議。';
  }
}
