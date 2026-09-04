export const flexboxContent = {
  title: 'فليكس بوكس',
  icon: '📦',
  description: 'أتقن التخطيط المرن للعناصر على محور رئيسي ومحور عرضي.',
  eyebrow: '🎛️ دليل Flexbox',
  heroTitle: 'اتعلّم <span>Flexbox</span> من خلال التجربة، مش الحفظ',
  subtitle: `تخيّل إن عندك صندوق جواه كذا عنصر، وعايز تتحكّم في مكانهم، ترتيبهم، والمسافات اللي بينهم — هنا بييجي دور Flexbox. كل اللي عليك إنك تحوّل الصندوق لـ <code>Flex Container</code> بسطر واحد: <code>display: flex</code>، وساعتها تقدر تتحكّم بسهولة في ترتيب العناصر اللي جواه. جرّب بنفسك تحت 👇`,
  sections: [
    {
      eyebrow: '🧩 البداية من هنا',
      title: 'مين الـ <code>Container</code> ومين الـ <code>Items</code>؟',
      description: `عندك عنصر أب، وجواه شوية عناصر أبناء. لما تكتب <code>display: flex</code> على الأب، العناصر الأبناء المباشرة بتتحوّل تلقائيًا لـ"عناصر مرنة" (<code>Flex Items</code>)، والأب نفسه بيبقى "حاوية مرنة" (<code>Flex Container</code>) وتبدأ تتحكّم في ترتيبها. ببساطة: <b>الأب = <code>Container</code></b>، <b>الأبناء المباشرين = <code>Items</code></b>.`,
      diagram: true,
    },
    {
      eyebrow: '🧭 أهم فكرة في Flexbox',
      title: 'عندك محورين لازم تبقى فاهمهم',
      description: `Flexbox بيشتغل باستخدام محورين: <b><code>Main Axis</code></b> (المحور الرئيسي) وهو الاتجاه الأساسي اللي العناصر بتمشي فيه، و<b><code>Cross Axis</code></b> (المحور العرضي) وهو الاتجاه اللي بيكون عمودي على المحور الأساسي. مين اللي بيحدد اتجاه الـ Main Axis؟ <code>flex-direction</code>. لو الاتجاه <code>row</code> يبقى العناصر ماشية أفقي، ولو <code>column</code> يبقى ماشية لفوق وتحت.`,
      axes: true,
      callout: {
        icon: '⚠️',
        title: 'خد بالك مع RTL:',
        content: `لو الصفحة مكتوبة من اليمين للشمال، زي العربي، اتجاه <code class="mono">row</code> بيبدأ من <b>اليمين</b>. يعني <code class="mono">flex-start</code> مش لازم يكون على الشمال — وده سبب شائع جدًا للّخبطة، خصوصًا لو بتتنقل بين شروحات عربية وإنجليزية. جرّبه بنفسك في المعمل تحت.`,
      },
    },
    {
      eyebrow: '🎮 جرّب بنفسك',
      title: 'حرّك العناصر وشوف اللي بيحصل',
      description: 'غيّر كل اختيار، وبص على الصناديق وهي بتتغيّر قدامك، مع الكود اللي بيتغيّر تحت كل مرة.',
      controls: {
        direction: {
          label: 'flex-direction — اتجاه العناصر',
          options: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
        wrap: {
          label: 'flex-wrap — تنزل سطر جديد ولا لأ؟',
          options: ['nowrap', 'wrap'],
        },
        justify: {
          label: 'justify-content — تتوزّع إزاي؟',
          options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
        },
        align: {
          label: 'align-items — تتحاذى إزاي في الاتجاه التاني؟',
          options: ['stretch', 'flex-start', 'center', 'flex-end'],
        },
        alignSelf: {
          label: 'align-self — للعنصر التاني (الأصفر)',
          options: ['auto', 'flex-start', 'center', 'flex-end', 'stretch'],
        },
        flexFlow: {
          label: 'flex-flow — اختصار الاتجاه واللف',
          options: ['', 'row nowrap', 'row wrap', 'column nowrap', 'column wrap'],
        },
      },
    },
    {
      eyebrow: '⚡ اختصار flex-flow',
      title: '<code>flex-flow</code> — الاتجاه واللف في خاصية واحدة',
      description: `<code>flex-flow</code> هو اختصار بيجمع <code>flex-direction</code> و <code>flex-wrap</code> في خاصية واحدة. الصيغة هي <code>flex-flow: direction wrap;</code>. بيتستخدم عشان تكتب الكود أنظف لما تبي تحد الاتجاه واللف مع بعض.`,
      flexFlowNote: true,
    },
    {
      eyebrow: '🙋‍♂️ خصائص على العنصر مش الحاوية',
      title: '<code>align-self</code> — عنصر واحد بس عايز يختلف عن الباقي؟',
      description: `<code>align-items</code> بتتحط على الـ <code>container</code> وبتتحكم في كل العناصر مع بعض. لكن لو عايز عنصر واحد بس يتحاذى بشكل مختلف عن إخواته، تحط <code>align-self</code> على العنصر نفسه — وهي بتلاقيه وبتلغي (override) اللي جاي من <code>align-items</code> بتاع الأب، لكن بس للعنصر ده. القيم زيها زي <code>align-items</code> بالظبط: <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>stretch</code>, وكمان <code>auto</code> (الافتراضي، يعني "خد اللي الأب حاطه").`,
      callout: {
        icon: '💡',
        title: '',
        content: 'لاحظ في الأمثلة تحت: كل الصناديق حاوياتها فيها <code>align-items: flex-start</code> — العنصر الأصفر (التاني) بس هو اللي عليه <code>align-self</code>، وده اللي بيخليه يتصرف مختلف عن أخواته الفيروزي والكورال.',
      },
      alignSelfGallery: true,
      gallery: [
        { value: 'none', description: 'من غير <code>align-self</code> — العنصر الأصفر ماشي زي باقي إخواته على <code>align-items: flex-start</code>', tall: true },
        { value: 'center', description: '<code>align-self: center</code> — الأصفر بس اتوسط، والباقي فضل فوق', tall: true },
        { value: 'flex-end', description: '<code>align-self: flex-end</code> — الأصفر بس نزل تحت خالص', tall: true },
        { value: 'stretch', description: '<code>align-self: stretch</code> — الأصفر بس اتمدد يملأ الصندوق طولاً', tall: true },
      ],
      codeExample: `.container {
  display: flex;
  align-items: flex-start; /* الافتراضي لكل العناصر */
}

.item-2 {
  align-self: flex-end; /* العنصر ده بس هيتصرف مختلف */
}`,
    },
    {
      eyebrow: '⚡ مين اللي ياخد المساحة الزيادة؟',
      title: '<code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>',
      description: `مش لازم كل العناصر تبقى بنفس الحجم. الثلاث خصومات دي بتشتغل مع بعض في ٣ خطوات: الأول، Flexbox بيحدد الحجم الأساسي لكل عنصر (<code>flex-basis</code>)، وبعدين بيشوف فيه مساحة زيادة ولا لأ — لو فيه، بيوزّعها حسب <code>flex-grow</code>، ولو مفيش، بيقصّر العناصر حسب <code>flex-shrink</code>. جرّب كل واحد لوحده تحت عشان تفهم الفكرة أوضح.`,
      growShrinkBasis: true,
    },
    {
      eyebrow: '🔀 غيّر الترتيب من غير ما تلمس الـ HTML',
      title: '<code>order</code>',
      description: `كل عناصر Flexbox عندها قيمة <code>order</code> افتراضية بتساوي <code>0</code>. المتصفح بيترتب العناصر بصريًا حسب الرقم ده من الأصغر للأكبر — مش حسب ترتيبهم في الـ HTML. ده معناه إنك تقدر تخلي آخر عنصر في الكود يظهر الأول على الشاشة من غير ما تلمس الـ HTML أصلاً، وده مفيد جدًا في التصميم المتجاوب (زي تغيير ترتيب السايدبار على الموبايل من غير ما تعيد ترتيب الـ HTML).`,
      orderLab: true,
      orderWarning: '⚠️ تحذير إمكانية الوصول: <code>order</code> بيغيّر الترتيب البصري بس، وبيخلي ترتيب الـ DOM وترتيب التنقل بالكيبورد (ترتيب القراءة / Tab) زي ما هو. ده يعني إن أي حد بيستخدم قارئ شاشة أو كيبورد ممكن يقرأ أو يتنقل بترتيب مختلف تمامًا عن اللي شايفه على الشاشة — استخدمه بحذر وتجنّب إعادة ترتيب المعلومات المهمة بيه.',
    },
    {
      eyebrow: '📐 <code>justify-content</code>',
      title: 'عايز توزّع العناصر على المحور الرئيسي؟',
      description: 'دي وظيفة <code>justify-content</code>. الفرق بين القيم بيبان جدًا لما يكون عندك مساحة فاضية جوه الـ <code>Container</code> — جرّب كل واحدة وشوف الفرق بنفسك.',
      gallery: [
        { value: 'flex-start', description: 'العناصر تبدأ من بداية المحور' },
        { value: 'center', description: 'كل العناصر تتجمع في النص' },
        { value: 'flex-end', description: 'العناصر تروح لنهاية المحور' },
        { value: 'space-between', description: 'أول عنصر في البداية وآخر عنصر في النهاية، والمسافات بينهم متساوية' },
        { value: 'space-around', description: 'كل عنصر حواليه مساحة' },
        { value: 'space-evenly', description: 'المسافة بين كل العناصر وعند الأطراف تبقى متساوية تمامًا' },
      ],
    },
    {
      eyebrow: '↕️ <code>align-items</code>',
      title: 'طيب نتحكّم في الاتجاه التاني إزاي؟',
      description: 'هنا بنستخدم <code>align-items</code>. لو الـ <code>flex-direction</code> عندك <code>row</code>، فالمحور العرضي بيكون رأسي.',
      gallery: [
        { value: 'flex-start', description: 'العناصر تروح لبداية المحور العرضي', tall: true },
        { value: 'center', description: 'العناصر تتوسّط', tall: true },
        { value: 'flex-end', description: 'العناصر تروح لنهاية المحور العرضي', tall: true },
        { value: 'stretch', description: 'العناصر تتمدّد علشان تملأ المساحة، وده الافتراضي لو ارتفاع العنصر مش متحدد', tall: true },
      ],
    },
    {
      eyebrow: '📦 مين ياخد المساحة الزيادة؟',
      title: '<code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>',
      description: `مش كل العناصر لازم تفضل بنفس الحجم. الثلاث خصائص دول بيشتغلوا مع بعض في ٣ خطوات: الأول Flexbox بيحدد حجم كل عنصر الأساسي (<code>flex-basis</code>)، بعدين بيشوف فاضل مساحة ولا لأ، لو فاضل بيوزّعها حسب <code>flex-grow</code>، ولو ناقص بيقصّر العناصر حسب <code>flex-shrink</code>. جرّب كل واحدة لوحدها تحت عشان الفكرة توضح أكتر.`,
      growShrinkBasis: true,
    },
    {
      eyebrow: '🔀 غيّر الترتيب من غير ما تلمس الـ HTML',
      title: '<code>order</code>',
      description: `كل عناصر Flexbox قيمة <code>order</code> بتاعتها بشكل افتراضي <code>0</code>. المتصفح بيرتّبهم بصريًا حسب الرقم ده من الأصغر للأكبر — مش حسب ترتيبهم في الـ HTML. يعني تقدر تخلّي آخر عنصر في الكود يظهر الأول على الشاشة، من غير ما تلمس الـ markup خالص، وده مفيد جدًا في التصميم الـ Responsive (زي إنك تغيّر ترتيب عمود السايدبار على الموبايل من غير ما تعيد ترتيب الـ HTML).`,
      orderLab: true,
      orderWarning: '⚠️ تنبيه Accessibility: <code>order</code> بيغيّر الترتيب البصري بس، وبيسيب ترتيب الـ DOM وترتيب التنقّل بالـ Tab (Reading order / Tab order) زي ما هو. يعني ممكن حد بيستخدم قارئ شاشة أو كيبورد بس يقرأ أو يتنقّل بترتيب مختلف تمامًا عن اللي شايفه بعينه على الشاشة — استخدمها بحرص وابعد عن إعادة ترتيب معلومات مهمة بيها.',
    },
  ],
  exercises: [
    { id: 1, instruction: '١) عايز العناصر تترتب فوق بعض بدل جنب بعض. كمّل الكود:', expectedProp: 'flex-direction', expectedValue: 'column', success: 'تمام! ✅ column بيخلي العناصر تترتب فوق بعض بدل جنب بعض.', hint: 'مش كده. القيمة اللي بترتب العناصر عموديًا (فوق بعض) هي column — جرّب تاني.' },
    { id: 2, instruction: '٢) عايز العناصر تتجمع في نص الصندوق أفقيًا. كمّل الكود:', expectedProp: 'justify-content', expectedValue: 'center', success: 'تمام! ✅ center بيوسط العناصر على المحور الرئيسي.', hint: 'مش كده. القيمة اللي بتوسط العناصر أفقيًا هي center — جرّب تاني.' },
    { id: 3, instruction: '٣) عندك عناصر أعرض من الصندوق، وعايزهم ينزلوا سطر جديد بدل ما يعملوا سكرول. كمّل الكود:', expectedProp: 'flex-wrap', expectedValue: 'wrap', success: 'تمام! ✅ wrap بيخلي العناصر تنزل سطر جديد لما المساحة تخلص.', hint: 'مش كده. القيمة اللي بتخلي العناصر تنزل سطر جديد هي wrap — جرّب تاني.' },
    { id: 4, instruction: '٤) عندك عناصر بأطوال مختلفة، وعايزهم يتوسطوا رأسيًا مع بعض. كمّل الكود:', expectedProp: 'align-items', expectedValue: 'center', success: 'تمام! ✅ align-items: center بيوسط العناصر عموديًا على المحور العرضي.', hint: 'مش كده. القيمة اللي بتوسط العناصر عموديًا هي center — جرّب تاني.' },
    { id: 5, instruction: '٥) عايز أول عنصر يلزق في بداية الصندوق، وآخر عنصر في نهايته، والمسافة بينهم متساوية. كمّل الكود:', expectedProp: 'justify-content', expectedValue: 'space-between', success: 'تمام! ✅ space-between بيلزّق أول عنصر بالأول وآخر عنصر بالآخر، والمسافة بينهم متساوية.', hint: 'مش كده. القيمة اللي بتوزّع المسافة بين العناصر بس (من غير مسافة عند الأطراف) هي space-between — جرّب تاني.' },
    { id: 6, instruction: '٦) عايز ترتيب العناصر يتقلب (اللي في الأول يبقى في الآخر). كمّل الكود:', expectedProp: 'flex-direction', expectedValue: 'row-reverse', success: 'تمام! ✅ row-reverse بيعكس ترتيب العناصر على المحور الرئيسي.', hint: 'مش كده. القيمة اللي بتقلب ترتيب الصف هي row-reverse — جرّب تاني.' },
    { id: 7, instruction: '٧) تحدي 🔥 — عندك ٣ عناصر ومساحة فاضية في الصندوق. عايز العنصر التاني (الأصفر) بس ياخد كل المساحة الفاضية. كمّل الكود على العنصر التاني بس:', expectedProp: 'flex-grow', expectedValue: '1', target: '.ex-box:nth-child(2)', success: 'تمام! ✅ العنصر التاني أخد كل المساحة الفاضية لإن grow بتاعه أكبر من صفر.', hint: 'مش كده. لازم تدّي flex-grow قيمة أكبر من صفر (زي 1) للعنصر التاني — جرّب تاني.' },
    { id: 8, instruction: '٨) عايز العناصر التلاتة يتجمعوا في آخر الصندوق. كمّل الكود:', expectedProp: 'justify-content', expectedValue: 'flex-end', success: 'تمام! ✅ flex-end بيخلي العناصر تلزق في نهاية المحور الرئيسي.', hint: 'مش كده. القيمة اللي بتلزّق العناصر في الآخر هي flex-end — جرّب تاني.' },
    { id: 9, instruction: '٩) عايز كل عنصر تكون حواليه مساحة متساوية (حتى في الأطراف، بس نص المسافة اللي بين العناصر). كمّل الكود:', expectedProp: 'justify-content', expectedValue: 'space-around', success: 'تمام! ✅ space-around بيدي كل عنصر مساحة متساوية حواليه.', hint: 'مش كده. القيمة اللي بتدي كل عنصر مساحة حواليه (مش بس بينهم) هي space-around — جرّب تاني.' },
    { id: 10, instruction: '١٠) عايز كل المسافات (بين العناصر وعند الأطراف) تبقى متساوية تمامًا. كمّل الكود:', expectedProp: 'justify-content', expectedValue: 'space-evenly', success: 'تمام! ✅ space-evenly بيخلي كل المسافات متساوية تمامًا، حتى عند الأطراف.', hint: 'مش كده. القيمة اللي بتخلي كل المسافات متساوية 100% حتى عند الأطراف هي space-evenly — جرّب تاني.' },
    { id: 11, instruction: '١١) عندك عناصر بأطوال مختلفة، وعايزهم كلهم يبقوا لازقين في قاع الصندوق. كمّل الكود:', expectedProp: 'align-items', expectedValue: 'flex-end', success: 'تمام! ✅ align-items: flex-end بيخلي العناصر تلزق في نهاية المحور العرضي.', hint: 'مش كده. القيمة اللي بتلزّق العناصر تحت هي flex-end — جرّب تاني.' },
    { id: 12, instruction: '١٢) عايز العناصر ترتب فوق بعض بس بالمقلوب (اللي كان هيبقى تحت، يبقى فوق). كمّل الكود:', expectedProp: 'flex-direction', expectedValue: 'column-reverse', success: 'تمام! ✅ column-reverse بيرتّب العناصر عموديًا بالمقلوب، اللي كان تحت يبقى فوق.', hint: 'مش كده. القيمة اللي بترتّب العناصر عموديًا بالمقلوب هي column-reverse — جرّب تاني.' },
    { id: 13, instruction: '١٣) عايز العنصر التاني (الأصفر) بس ينزل لقاع الصندوق، من غير ما يأثر على الباقي. كمّل الكود عليه بس:', expectedProp: 'align-self', expectedValue: 'flex-end', target: '.ex-box:nth-child(2)', success: 'تمام! ✅ align-self بيتخطى align-items ويحدد محاذاة العنصر ده بس.', hint: 'مش كده. القيمة اللي بتنزّل العنصر لتحت هي flex-end — جرّب تاني.' },
    { id: 14, instruction: '١٤) الصندوق ضيق والعناصر التلاتة مضطرة تتقلص. عايز العنصر التاني بس يحافظ على حجمه الأصلي ومايتقلصش زي الباقي. كمّل الكود عليه بس:', expectedProp: 'flex-shrink', expectedValue: '0', target: '.ex-box:nth-child(2)', success: 'تمام! ✅ flex-shrink: 0 بيمنع العنصر من الانكماش حتى لو الصندوق ضاق.', hint: 'مش كده. القيمة اللي بتمنع الانكماش خالص هي 0 — جرّب تاني.' },
    { id: 15, instruction: '١٥) عايز العنصر التاني يبدأ بحجم أساسي 150px قبل ما فليكس يوزّع أي مساحة زيادة. كمّل الكود عليه بس:', expectedProp: 'flex-basis', expectedValue: '150px', target: '.ex-box:nth-child(2)', success: 'تمام! ✅ flex-basis: 150px بيدّي العنصر حجم أساسي 150px قبل أي تمدد أو انكماش.', hint: 'مش كده. اكتب القيمة كاملة بالوحدة، يعني 150px — جرّب تاني.' },
    { id: 16, instruction: '١٦) عايز مسافة ثابتة 20px بين كل عنصر واللي جنبه، من غير ما تحط margin على كل عنصر لوحده. كمّل الكود على الحاوية:', expectedProp: 'gap', expectedValue: '20px', success: 'تمام! ✅ gap: 20px بيحط مسافة ثابتة بين كل عنصر واللي جنبه.', hint: 'مش كده. اكتب القيمة كاملة بالوحدة، يعني 20px — جرّب تاني.' },
    { id: 17, instruction: '١٧) عايز العنصر التالت (الفيروزي) يظهر الأول، من غير ما تغيّر ترتيبه في HTML. كمّل الكود عليه بس:', expectedProp: 'order', expectedValue: '-1', target: '.ex-box:nth-child(3)', success: 'تمام! ✅ order: -1 خلّى العنصر التالت يتقدّم قبل الباقي، لإن كل العناصر قيمتها الافتراضية 0.', hint: 'مش كده. أي رقم أصغر من صفر (زي 1-) بيخلي العنصر يتقدّم — جرّب تاني.' },
    { id: 18, instruction: '١٨) تحدي 🔥 — اختصار <code>flex</code> بيجمع grow وshrink وbasis في خاصية واحدة. عايز العنصر التاني ياخد كل المساحة الفاضية باستخدام الاختصار بس. كمّل الكود عليه:', expectedProp: 'flex', expectedValue: '1|1 1 0|1 1 0%|1 1 auto', target: '.ex-box:nth-child(2)', success: 'تمام! ✅ flex: 1 اختصار لـ flex-grow: 1؛ flex-shrink: 1؛ flex-basis: 0 في سطر واحد.', hint: 'مش كده. جرّب القيمة flex: 1 — دي أشهر اختصار بيدّي العنصر كل المساحة الفاضية.' },
  ],
  cheatSheet: {
    container: [
      { property: 'display: flex', description: 'بتفعّل Flexbox' },
      { property: 'flex-direction', description: 'بتحدد اتجاه العناصر' },
      { property: 'flex-wrap', description: 'بتحدد العناصر تلف لسطر جديد ولا لأ' },
      { property: 'flex-flow', description: 'اختصار للاتجاه واللف' },
      { property: 'justify-content', description: 'بتوزّع العناصر على المحور الرئيسي' },
      { property: 'align-items', description: 'بتحاذي العناصر على المحور العرضي' },
      { property: 'gap', description: 'بتعمل مسافة ثابتة بين العناصر' },
    ],
    item: [
      { property: 'flex-grow', description: 'بتحدد قد إيه العنصر يكبر' },
      { property: 'flex-shrink', description: 'بتحدد قد إيه العنصر ينكمش' },
      { property: 'flex-basis', description: 'بتحدد حجمه الأساسي' },
      { property: 'align-self', description: 'بتغيّر محاذاة عنصر واحد لوحده' },
      { property: 'order', description: 'بتغيّر ترتيب العنصر' },
    ],
  },
  summary: {
    question1: 'flex-direction',
    answer1: '١. العناصر هتمشي فين؟',
    question2: 'justify-content',
    answer2: '٢. هتتوزّع إزاي؟',
    question3: 'align-items',
    answer3: '٣. هتتحاذى إزاي في الاتجاه التاني؟',
    note: 'Flexbox مش محتاج حفظ كتير؛ جرّب القيم، وشوف النتيجة، وهتفهمها أسرع.',
  },
};
