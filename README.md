# Allinma World — هاكاثون أمد 26

> تجربة تفاعلية غامرة لبناء الوعي المالي لدى الجيل الرقمي

---

## 🎮 تجربة اللعبة مباشرة

[![Play on Roblox](https://img.shields.io/badge/Roblox-Play%20Now-red?style=for-the-badge&logo=roblox)](https://www.roblox.com/ar/games/119781384879094/Allinma-world)

🔗 **[allinma-world على منصة Roblox](https://www.roblox.com/ar/games/119781384879094/Allinma-world)**

---

## 📊 العرض التقديمي

[![View Presentation](https://img.shields.io/badge/Presentation-View%20Now-blue?style=for-the-badge)](https://alinma-world.replit.app/alinma-world-deck/)

🔗 **[مشاهدة العرض التقديمي كاملاً](https://alinma-world.replit.app/alinma-world-deck/)**

---

## 📁 هيكل المشروع

```
roblox/
├── AllinmaWorld.rbxl              # ملف المشروع الكامل — Roblox Studio
└── scripts/
    ├── BankShiftScript.lua        # فتح وإغلاق دوام موظف البنك
    ├── BuildManager.lua           # نظام بناء البنك خطوة بخطوة
    ├── InteractiveBankCustomerScript.lua  # التفاعل مع عملاء البنك
    ├── PlayerDataScript.lua       # بيانات اللاعب عند الدخول
    ├── QuickWorkerAndVIP.lua      # شراء العامل والترقية وعميل VIP
    ├── LocalScript1.lua           # إغلاق GUI (Client)
    ├── LocalScript2.lua           # عرض الرصيد وتحديثه (Client)
    └── AllScripts_Combined.lua    # جميع الأكواد في ملف واحد للمراجعة

artifacts/alinma-world-deck/
├── src/pages/slides/              # 14 شريحة
├── public/                        # الصور والأصول
└── src/data/                      # بيانات الشرائح
```

---

## 🧩 أكواد اللعبة

| الملف | الوظيفة |
|-------|---------|
| `BankShiftScript.lua` | يتحكم في بدء وإنهاء دوام موظف البنك عبر Proximity Prompts |
| `BuildManager.lua` | نظام بناء البنك تدريجياً — أرضية ← مبنى ← أثاث ← مكتب مدير |
| `InteractiveBankCustomerScript.lua` | إدارة تفاعل العملاء مع البنك |
| `PlayerDataScript.lua` | ينشئ بيانات كل لاعب (رصيد، وظيفة، حالة) عند الدخول |
| `QuickWorkerAndVIP.lua` | شراء عامل، ترقية اللاعب لمدير، استقبال عميل VIP بمليون |
| `LocalScript1.lua` | يغلق واجهة GUI عند الضغط (Client-Side) |
| `LocalScript2.lua` | يعرض رصيد اللاعب ويحدثه لحظياً (Client-Side) |

> 📂 كل كود موجود كملف مستقل في [`roblox/scripts/`](./roblox/scripts/)
> — أو اقرأها مجمّعة في [`AllScripts_Combined.lua`](./roblox/scripts/AllScripts_Combined.lua)

---

*مشروع هاكاثون أمد 26 — مسار التلعيب*
