(this["webpackJsonp@cho/site"]=this["webpackJsonp@cho/site"]||[]).push([[8],{1018:function(e,r,a){"use strict";a.r(r),a.d(r,"cho_divider",(function(){return d})),a.d(r,"cho_menu_item",(function(){return i}));var o=a(15),f=a(1075),l=function(e,r,a,o){return new(a||(a=Promise))((function(f,l){function c(e){try{d(o.next(e))}catch(r){l(r)}}function n(e){try{d(o.throw(e))}catch(r){l(r)}}function d(e){var r;e.done?f(e.value):(r=e.value,r instanceof a?r:new a((function(e){e(r)}))).then(c,n)}d((o=o.apply(e,r||[])).next())}))},c=function(e,r){var a,o,f,l,c={label:0,sent:function(){if(1&f[0])throw f[1];return f[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function n(l){return function(n){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,o&&(f=2&l[0]?o.return:l[0]?o.throw||((f=o.return)&&f.call(o),0):o.next)&&!(f=f.call(o,l[1])).done)return f;switch(o=0,f&&(l=[2&l[0],f.value]),l[0]){case 0:case 1:f=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,o=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!(f=(f=c.trys).length>0&&f[f.length-1])&&(6===l[0]||2===l[0])){c=0;continue}if(3===l[0]&&(!f||l[1]>f[0]&&l[1]<f[3])){c.label=l[1];break}if(6===l[0]&&c.label<f[1]){c.label=f[1],f=l;break}if(f&&c.label<f[2]){c.label=f[2],c.ops.push(l);break}f[2]&&c.ops.pop(),c.trys.pop();continue}l=r.call(e,c)}catch(n){l=[6,n],o=0}finally{a=f=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,n])}}},n={dividerLi:"divider__li"},d=function(){function e(e){Object(o.k)(this,e)}return e.prototype.render=function(){return Object(o.i)("li",{class:n.dividerLi})},e}();d.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"); :root{--font-family:"Inter", sans-serif;--font-weight-bold:700;--font-size:1rem;--label__font-size:0.8125rem;font-family:var(--font-family)}:root{--border-width:0.0625rem;--border-radius:0.25rem}:root{--red50:#ffebee;--red100:#ffcdd2;--red200:#ef9a9a;--red300:#e57373;--red400:#ef5350;--red500:#f44336;--red600:#e53935;--red700:#d32f2f;--red800:#c62828;--red900:#b71c1c;--redA100:#ff8a80;--redA200:#ff5252;--redA400:#ff1744;--redA700:#d50000;--pink50:#fce4ec;--pink100:#f8bbd0;--pink200:#f48fb1;--pink300:#f06292;--pink400:#ec407a;--pink500:#e91e63;--pink600:#d81b60;--pink700:#c2185b;--pink800:#ad1457;--pink900:#880e4f;--pinkA100:#ff80ab;--pinkA200:#ff4081;--pinkA400:#f50057;--pinkA700:#c51162;--purple50:#f3e5f5;--purple100:#e1bee7;--purple200:#ce93d8;--purple300:#ba68c8;--purple400:#ab47bc;--purple500:#9c27b0;--purple600:#8e24aa;--purple700:#7b1fa2;--purple800:#6a1b9a;--purple900:#4a148c;--purpleA100:#ea80fc;--purpleA200:#e040fb;--purpleA400:#d500f9;--purpleA700:#aa00ff;--deep-purple50:#ede7f6;--deep-purple100:#d1c4e9;--deep-purple200:#b39ddb;--deep-purple300:#9575cd;--deep-purple400:#7e57c2;--deep-purple500:#673ab7;--deep-purple600:#5e35b1;--deep-purple700:#512da8;--deep-purple800:#4527a0;--deep-purple900:#311b92;--deep-purpleA100:#b388ff;--deep-purpleA200:#7c4dff;--deep-purpleA400:#651fff;--deep-purpleA700:#6200ea;--indigo50:#e8eaf6;--indigo100:#c5cae9;--indigo200:#9fa8da;--indigo300:#7986cb;--indigo400:#5c6bc0;--indigo500:#3f51b5;--indigo600:#3949ab;--indigo700:#303f9f;--indigo800:#283593;--indigo900:#1a237e;--indigoA100:#8c9eff;--indigoA200:#536dfe;--indigoA400:#3d5afe;--indigoA700:#304ffe;--blue50:#e3f2fd;--blue100:#bbdefb;--blue200:#90caf9;--blue300:#64b5f6;--blue400:#42a5f5;--blue500:#2196f3;--blue600:#1e88e5;--blue700:#1976d2;--blue800:#1565c0;--blue900:#0d47a1;--blueA100:#82b1ff;--blueA200:#448aff;--blueA400:#2979ff;--blueA700:#2962ff;--light-blue50:#e1f5fe;--light-blue100:#b3e5fc;--light-blue200:#81d4fa;--light-blue300:#4fc3f7;--light-blue400:#29b6f6;--light-blue500:#03a9f4;--light-blue600:#039be5;--light-blue700:#0288d1;--light-blue800:#0277bd;--light-blue900:#01579b;--light-blueA100:#80d8ff;--light-blueA200:#40c4ff;--light-blueA400:#00b0ff;--light-blueA700:#0091ea;--cyan50:#e0f7fa;--cyan100:#b2ebf2;--cyan200:#80deea;--cyan300:#4dd0e1;--cyan400:#26c6da;--cyan500:#00bcd4;--cyan600:#00acc1;--cyan700:#0097a7;--cyan800:#00838f;--cyan900:#006064;--cyanA100:#84ffff;--cyanA200:#18ffff;--cyanA400:#00e5ff;--cyanA700:#00b8d4;--teal50:#e0f2f1;--teal100:#b2dfdb;--teal200:#80cbc4;--teal300:#4db6ac;--teal400:#26a69a;--teal500:#009688;--teal600:#00897b;--teal700:#00796b;--teal800:#00695c;--teal900:#004d40;--tealA100:#a7ffeb;--tealA200:#64ffda;--tealA400:#1de9b6;--tealA700:#00bfa5;--green50:#e8f5e9;--green100:#c8e6c9;--green200:#a5d6a7;--green300:#81c784;--green400:#66bb6a;--green500:#4caf50;--green600:#43a047;--green700:#388e3c;--green800:#2e7d32;--green900:#1b5e20;--greenA100:#b9f6ca;--greenA200:#69f0ae;--greenA400:#00e676;--greenA700:#00c853;--light-green50:#f1f8e9;--light-green100:#dcedc8;--light-green200:#c5e1a5;--light-green300:#aed581;--light-green400:#9ccc65;--light-green500:#8bc34a;--light-green600:#7cb342;--light-green700:#689f38;--light-green800:#558b2f;--light-green900:#33691e;--light-greenA100:#ccff90;--light-greenA200:#b2ff59;--light-greenA400:#76ff03;--light-greenA700:#64dd17;--lime50:#f9fbe7;--lime100:#f0f4c3;--lime200:#e6ee9c;--lime300:#dce775;--lime400:#d4e157;--lime500:#cddc39;--lime600:#c0ca33;--lime700:#afb42b;--lime800:#9e9d24;--lime900:#827717;--limeA100:#f4ff81;--limeA200:#eeff41;--limeA400:#c6ff00;--limeA700:#aeea00;--yellow50:#fffde7;--yellow100:#fff9c4;--yellow200:#fff59d;--yellow300:#fff176;--yellow400:#ffee58;--yellow500:#ffeb3b;--yellow600:#fdd835;--yellow700:#fbc02d;--yellow800:#f9a825;--yellow900:#f57f17;--yellowA100:#ffff8d;--yellowA200:#ffff00;--yellowA400:#ffea00;--yellowA700:#ffd600;--amber50:#fff8e1;--amber100:#ffecb3;--amber200:#ffe082;--amber300:#ffd54f;--amber400:#ffca28;--amber500:#ffc107;--amber600:#ffb300;--amber700:#ffa000;--amber800:#ff8f00;--amber900:#ff6f00;--amberA100:#ffe57f;--amberA200:#ffd740;--amberA400:#ffc400;--amberA700:#ffab00;--orange50:#fff3e0;--orange100:#ffe0b2;--orange200:#ffcc80;--orange300:#ffb74d;--orange400:#ffa726;--orange500:#ff9800;--orange600:#fb8c00;--orange700:#f57c00;--orange800:#ef6c00;--orange900:#e65100;--orangeA100:#ffd180;--orangeA200:#ffab40;--orangeA400:#ff9100;--orangeA700:#ff6d00;--deep-orange50:#fbe9e7;--deep-orange100:#ffccbc;--deep-orange200:#ffab91;--deep-orange300:#ff8a65;--deep-orange400:#ff7043;--deep-orange500:#ff5722;--deep-orange600:#f4511e;--deep-orange700:#e64a19;--deep-orange800:#d84315;--deep-orange900:#bf360c;--deep-orangeA100:#ff9e80;--deep-orangeA200:#ff6e40;--deep-orangeA400:#ff3d00;--deep-orangeA700:#dd2c00;--brown50:#efebe9;--brown100:#d7ccc8;--brown200:#bcaaa4;--brown300:#a1887f;--brown400:#8d6e63;--brown500:#795548;--brown600:#6d4c41;--brown700:#5d4037;--brown800:#4e342e;--brown900:#3e2723;--gray50:#fafafa;--gray100:#f5f5f5;--gray200:#eeeeee;--gray300:#e0e0e0;--gray400:#bdbdbd;--gray500:#9e9e9e;--gray600:#757575;--gray700:#616161;--gray800:#424242;--gray900:#212121;--blue-gray50:#eceff1;--blue-gray100:#cfd8dc;--blue-gray200:#b0bec5;--blue-gray300:#90a4ae;--blue-gray400:#78909c;--blue-gray500:#607d8b;--blue-gray600:#546e7a;--blue-gray700:#455a64;--blue-gray800:#37474f;--blue-gray900:#263238;--white:#ffffff;--black:#000000;--red:var(--red500);--pink:var(--pink500);--purple:var(--purple500);--deep-purple:var(--deep-purple500);--indigo:var(--indigo500);--blue:var(--blue500);--light-blue:var(--light-blue500);--cyan:var(--cyan500);--teal:var(--teal500);--green:var(--green500);--light-green:var(--light-green500);--lime:var(--lime500);--yellow:var(--yellow500);--amber:var(--amber500);--orange:var(--orange500);--deep-orange:var(--deep-orange500);--brown:var(--brown500);--gray:var(--gray500);--blue-gray:var(--blue-gray500)}:root,[data-cho-theme=dark]{--primary:var(--blue200);--primary--hover:var(--blue300);--primary--focus:var(--blue400);--primary--active:var(--blue400);--success:var(--green200);--information:var(--blue200);--warning:var(--orange200);--error:var(--red200);--error--hover:var(--red300);--error--focus:var(--red400);--error--active:var(--red400);--disabled:var(--gray600);--text-color:var(--white);--label-color:var(--gray300);--placeholder-color:var(--gray600);--placeholder-color--disabled:var(--gray500);--placeholder-color--error:var(--red100);--button__text-color:var(--black);--button__primary-color--hover:var(--blue-gray800);--button__primary-color--active:var(--blue-gray900);--surface__background-color--dark:var(--gray100);--surface__background-color:var(--gray700);--surface__background-color--hover:var(--gray800);--surface__background-color--focus:var(--gray800);--surface__background-color--active:var(--gray900);--surface__background-color--disabled:var(--gray800);--surface__border-color:var(--gray100);--surface__color--hover:var(--gray700);--surface__color--focus:var(--gray800);--surface__color--active:var(--gray800);--background-color:var(--black);color:var(--text-color)}:root,[data-cho-theme=light]{--primary:var(--blue);--primary--hover:var(--blue600);--primary--focus:var(--blue800);--primary--active:var(--blue800);--success:var(--green);--information:var(--blue);--warning:var(--orange);--error:var(--red);--error--hover:var(--red700);--error--focus:var(--red800);--error--active:var(--red900);--disabled:var(--gray400);--text-color:var(--black);--label-color:var(--gray800);--placeholder-color:var(--gray400);--placeholder-color--disabled:var(--gray300);--placeholder-color--error:var(--red300);--button__text-color:var(--white);--button__primary-color--hover:var(--blue50);--button__primary-color--active:var(--blue100);--surface__background-color--dark:var(--gray900);--surface__background-color:var(--gray100);--surface__background-color--hover:var(--gray200);--surface__background-color--focus:var(--gray300);--surface__background-color--active:var(--gray300);--surface__background-color--disabled:var(--gray200);--surface__border-color:var(--gray400);--surface__color--hover:var(--gray50);--surface__color--focus:var(--gray100);--surface__color--active:var(--gray100);--background-color:var(--white);color:var(--text-color)}:host{display:inline-block}.divider__li{margin-top:0.25rem;margin-bottom:0.25rem;border-bottom:solid var(--surface__border-color);border-width:var(--border-width);list-style-type:none}';var i=function(){function e(e){var r=this;Object(o.k)(this,e),this.selected=!1,this.disabled=!1,this.didClick=function(e){r.disabled&&(e.preventDefault(),e.stopPropagation())},this.didKeyPress=function(e){r.disabled&&(e.preventDefault(),e.stopPropagation())},this.menuItemConnected=Object(o.f)(this,"menuItemConnected",7)}return e.prototype.setHostContainer=function(e){return l(this,void 0,void 0,(function(){return c(this,(function(r){return this.hostContainer=e,[2]}))}))},e.prototype.connectedCallback=function(){this.menuItemConnected.emit({target:this.host})},e.prototype.disconnectedCallback=function(){null!=this.hostContainer&&this.hostContainer.removeMenuItem(this.host)},e.prototype.render=function(){return Object(o.i)("li",{class:f.a.classes.li+" "+(this.selected?f.a.classes.liSelected:""),role:"menuitem",tabIndex:this.disabled?-1:0,"data-disabled":String(!!this.disabled),onClick:this.didClick,onKeyPress:this.didKeyPress},Object(o.i)("slot",null))},Object.defineProperty(e.prototype,"host",{get:function(){return Object(o.h)(this)},enumerable:!1,configurable:!0}),e}();i.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"); :root{--font-family:"Inter", sans-serif;--font-weight-bold:700;--font-size:1rem;--label__font-size:0.8125rem;font-family:var(--font-family)}:root{--border-width:0.0625rem;--border-radius:0.25rem}:root{--red50:#ffebee;--red100:#ffcdd2;--red200:#ef9a9a;--red300:#e57373;--red400:#ef5350;--red500:#f44336;--red600:#e53935;--red700:#d32f2f;--red800:#c62828;--red900:#b71c1c;--redA100:#ff8a80;--redA200:#ff5252;--redA400:#ff1744;--redA700:#d50000;--pink50:#fce4ec;--pink100:#f8bbd0;--pink200:#f48fb1;--pink300:#f06292;--pink400:#ec407a;--pink500:#e91e63;--pink600:#d81b60;--pink700:#c2185b;--pink800:#ad1457;--pink900:#880e4f;--pinkA100:#ff80ab;--pinkA200:#ff4081;--pinkA400:#f50057;--pinkA700:#c51162;--purple50:#f3e5f5;--purple100:#e1bee7;--purple200:#ce93d8;--purple300:#ba68c8;--purple400:#ab47bc;--purple500:#9c27b0;--purple600:#8e24aa;--purple700:#7b1fa2;--purple800:#6a1b9a;--purple900:#4a148c;--purpleA100:#ea80fc;--purpleA200:#e040fb;--purpleA400:#d500f9;--purpleA700:#aa00ff;--deep-purple50:#ede7f6;--deep-purple100:#d1c4e9;--deep-purple200:#b39ddb;--deep-purple300:#9575cd;--deep-purple400:#7e57c2;--deep-purple500:#673ab7;--deep-purple600:#5e35b1;--deep-purple700:#512da8;--deep-purple800:#4527a0;--deep-purple900:#311b92;--deep-purpleA100:#b388ff;--deep-purpleA200:#7c4dff;--deep-purpleA400:#651fff;--deep-purpleA700:#6200ea;--indigo50:#e8eaf6;--indigo100:#c5cae9;--indigo200:#9fa8da;--indigo300:#7986cb;--indigo400:#5c6bc0;--indigo500:#3f51b5;--indigo600:#3949ab;--indigo700:#303f9f;--indigo800:#283593;--indigo900:#1a237e;--indigoA100:#8c9eff;--indigoA200:#536dfe;--indigoA400:#3d5afe;--indigoA700:#304ffe;--blue50:#e3f2fd;--blue100:#bbdefb;--blue200:#90caf9;--blue300:#64b5f6;--blue400:#42a5f5;--blue500:#2196f3;--blue600:#1e88e5;--blue700:#1976d2;--blue800:#1565c0;--blue900:#0d47a1;--blueA100:#82b1ff;--blueA200:#448aff;--blueA400:#2979ff;--blueA700:#2962ff;--light-blue50:#e1f5fe;--light-blue100:#b3e5fc;--light-blue200:#81d4fa;--light-blue300:#4fc3f7;--light-blue400:#29b6f6;--light-blue500:#03a9f4;--light-blue600:#039be5;--light-blue700:#0288d1;--light-blue800:#0277bd;--light-blue900:#01579b;--light-blueA100:#80d8ff;--light-blueA200:#40c4ff;--light-blueA400:#00b0ff;--light-blueA700:#0091ea;--cyan50:#e0f7fa;--cyan100:#b2ebf2;--cyan200:#80deea;--cyan300:#4dd0e1;--cyan400:#26c6da;--cyan500:#00bcd4;--cyan600:#00acc1;--cyan700:#0097a7;--cyan800:#00838f;--cyan900:#006064;--cyanA100:#84ffff;--cyanA200:#18ffff;--cyanA400:#00e5ff;--cyanA700:#00b8d4;--teal50:#e0f2f1;--teal100:#b2dfdb;--teal200:#80cbc4;--teal300:#4db6ac;--teal400:#26a69a;--teal500:#009688;--teal600:#00897b;--teal700:#00796b;--teal800:#00695c;--teal900:#004d40;--tealA100:#a7ffeb;--tealA200:#64ffda;--tealA400:#1de9b6;--tealA700:#00bfa5;--green50:#e8f5e9;--green100:#c8e6c9;--green200:#a5d6a7;--green300:#81c784;--green400:#66bb6a;--green500:#4caf50;--green600:#43a047;--green700:#388e3c;--green800:#2e7d32;--green900:#1b5e20;--greenA100:#b9f6ca;--greenA200:#69f0ae;--greenA400:#00e676;--greenA700:#00c853;--light-green50:#f1f8e9;--light-green100:#dcedc8;--light-green200:#c5e1a5;--light-green300:#aed581;--light-green400:#9ccc65;--light-green500:#8bc34a;--light-green600:#7cb342;--light-green700:#689f38;--light-green800:#558b2f;--light-green900:#33691e;--light-greenA100:#ccff90;--light-greenA200:#b2ff59;--light-greenA400:#76ff03;--light-greenA700:#64dd17;--lime50:#f9fbe7;--lime100:#f0f4c3;--lime200:#e6ee9c;--lime300:#dce775;--lime400:#d4e157;--lime500:#cddc39;--lime600:#c0ca33;--lime700:#afb42b;--lime800:#9e9d24;--lime900:#827717;--limeA100:#f4ff81;--limeA200:#eeff41;--limeA400:#c6ff00;--limeA700:#aeea00;--yellow50:#fffde7;--yellow100:#fff9c4;--yellow200:#fff59d;--yellow300:#fff176;--yellow400:#ffee58;--yellow500:#ffeb3b;--yellow600:#fdd835;--yellow700:#fbc02d;--yellow800:#f9a825;--yellow900:#f57f17;--yellowA100:#ffff8d;--yellowA200:#ffff00;--yellowA400:#ffea00;--yellowA700:#ffd600;--amber50:#fff8e1;--amber100:#ffecb3;--amber200:#ffe082;--amber300:#ffd54f;--amber400:#ffca28;--amber500:#ffc107;--amber600:#ffb300;--amber700:#ffa000;--amber800:#ff8f00;--amber900:#ff6f00;--amberA100:#ffe57f;--amberA200:#ffd740;--amberA400:#ffc400;--amberA700:#ffab00;--orange50:#fff3e0;--orange100:#ffe0b2;--orange200:#ffcc80;--orange300:#ffb74d;--orange400:#ffa726;--orange500:#ff9800;--orange600:#fb8c00;--orange700:#f57c00;--orange800:#ef6c00;--orange900:#e65100;--orangeA100:#ffd180;--orangeA200:#ffab40;--orangeA400:#ff9100;--orangeA700:#ff6d00;--deep-orange50:#fbe9e7;--deep-orange100:#ffccbc;--deep-orange200:#ffab91;--deep-orange300:#ff8a65;--deep-orange400:#ff7043;--deep-orange500:#ff5722;--deep-orange600:#f4511e;--deep-orange700:#e64a19;--deep-orange800:#d84315;--deep-orange900:#bf360c;--deep-orangeA100:#ff9e80;--deep-orangeA200:#ff6e40;--deep-orangeA400:#ff3d00;--deep-orangeA700:#dd2c00;--brown50:#efebe9;--brown100:#d7ccc8;--brown200:#bcaaa4;--brown300:#a1887f;--brown400:#8d6e63;--brown500:#795548;--brown600:#6d4c41;--brown700:#5d4037;--brown800:#4e342e;--brown900:#3e2723;--gray50:#fafafa;--gray100:#f5f5f5;--gray200:#eeeeee;--gray300:#e0e0e0;--gray400:#bdbdbd;--gray500:#9e9e9e;--gray600:#757575;--gray700:#616161;--gray800:#424242;--gray900:#212121;--blue-gray50:#eceff1;--blue-gray100:#cfd8dc;--blue-gray200:#b0bec5;--blue-gray300:#90a4ae;--blue-gray400:#78909c;--blue-gray500:#607d8b;--blue-gray600:#546e7a;--blue-gray700:#455a64;--blue-gray800:#37474f;--blue-gray900:#263238;--white:#ffffff;--black:#000000;--red:var(--red500);--pink:var(--pink500);--purple:var(--purple500);--deep-purple:var(--deep-purple500);--indigo:var(--indigo500);--blue:var(--blue500);--light-blue:var(--light-blue500);--cyan:var(--cyan500);--teal:var(--teal500);--green:var(--green500);--light-green:var(--light-green500);--lime:var(--lime500);--yellow:var(--yellow500);--amber:var(--amber500);--orange:var(--orange500);--deep-orange:var(--deep-orange500);--brown:var(--brown500);--gray:var(--gray500);--blue-gray:var(--blue-gray500)}:root,[data-cho-theme=dark]{--primary:var(--blue200);--primary--hover:var(--blue300);--primary--focus:var(--blue400);--primary--active:var(--blue400);--success:var(--green200);--information:var(--blue200);--warning:var(--orange200);--error:var(--red200);--error--hover:var(--red300);--error--focus:var(--red400);--error--active:var(--red400);--disabled:var(--gray600);--text-color:var(--white);--label-color:var(--gray300);--placeholder-color:var(--gray600);--placeholder-color--disabled:var(--gray500);--placeholder-color--error:var(--red100);--button__text-color:var(--black);--button__primary-color--hover:var(--blue-gray800);--button__primary-color--active:var(--blue-gray900);--surface__background-color--dark:var(--gray100);--surface__background-color:var(--gray700);--surface__background-color--hover:var(--gray800);--surface__background-color--focus:var(--gray800);--surface__background-color--active:var(--gray900);--surface__background-color--disabled:var(--gray800);--surface__border-color:var(--gray100);--surface__color--hover:var(--gray700);--surface__color--focus:var(--gray800);--surface__color--active:var(--gray800);--background-color:var(--black);color:var(--text-color)}:root,[data-cho-theme=light]{--primary:var(--blue);--primary--hover:var(--blue600);--primary--focus:var(--blue800);--primary--active:var(--blue800);--success:var(--green);--information:var(--blue);--warning:var(--orange);--error:var(--red);--error--hover:var(--red700);--error--focus:var(--red800);--error--active:var(--red900);--disabled:var(--gray400);--text-color:var(--black);--label-color:var(--gray800);--placeholder-color:var(--gray400);--placeholder-color--disabled:var(--gray300);--placeholder-color--error:var(--red300);--button__text-color:var(--white);--button__primary-color--hover:var(--blue50);--button__primary-color--active:var(--blue100);--surface__background-color--dark:var(--gray900);--surface__background-color:var(--gray100);--surface__background-color--hover:var(--gray200);--surface__background-color--focus:var(--gray300);--surface__background-color--active:var(--gray300);--surface__background-color--disabled:var(--gray200);--surface__border-color:var(--gray400);--surface__color--hover:var(--gray50);--surface__color--focus:var(--gray100);--surface__color--active:var(--gray100);--background-color:var(--white);color:var(--text-color)}:host{display:inline-block}.menu-item__li{padding:0.5rem 1rem;background-color:var(--surface__background-color);list-style-type:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.menu-item__li ::slotted(*){width:100%}.menu-item__li[data-disabled=true]{color:var(--disabled);cursor:default}.menu-item__li:not([data-disabled=true]){cursor:pointer}.menu-item__li:not([data-disabled=true]):focus{background-color:var(--surface__background-color--focus)}.menu-item__li:not([data-disabled=true]):hover{background-color:var(--surface__background-color--hover)}.menu-item__li:not([data-disabled=true]):hover:active{background-color:var(--surface__background-color--active)}.menu-item__li--selected{background-color:var(--surface__background-color--active)}'},1075:function(e,r,a){"use strict";a.d(r,"a",(function(){return o}));var o={componentName:"cho-menu-item",classes:{li:"menu-item__li",liSelected:"menu-item__li--selected"},events:{menuItemConnected:"menuItemConnected",menuItemDisconnected:"menuItemDisconnected"}}}}]);