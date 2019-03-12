VER_INDEX = 0;
MUSIC_INDEX = 1;
NAME_INDEX = 2;
ID_INDEX = 3;
DISP_INDEX = 4;
DIFF_INDEX = 5; 

music_table = [
    [2,0, "RUGGED ASH†", "rugged_l", "RUGGED†", "A"],
    [3,1, "era(nostalmix)(H)", "eranos", "era(n H", "H"],
    [3,2, "era(nostalmix)(A)", "eranos", "era(n A", "A"],
    [3,3, "Holic", "holic", "Holi", "A"],
    [4,4, "DXY!(H)", "dxy", "DXY H", "H"],
    [4,5, "DXY!(A)", "dxy", "DXY A", "A"],
    [4,6, "era(step mix)", "erastep", "era(s", "A"],
    [4,7, "minimalian", "mnmlian", "mini", "A"],
    [4,8, "starmine", "starmine", "star", "A"],
    [4,9, "SWEET LAB", "swtlab24", "SWEET", "A"],
    [5,10, "QQQ", "qqq", "QQQ", "A"],
    [6,11, "Colors(radio edit)", "colors", "Colors", "A"],
    [6,12, "G2", "g2", "G2", "A"],
    [6,13, "NEMESIS", "nemesis", "NEME", "A"],
    [6,14, "route 80s", "r80s_emp", "80s", "A"],
    [6,15, "Summer Vacation(CU mix)", "summer", "Summ V", "A"],
    [7,16, "A", "a_amuro", "A", "A"],
    [7,17, "Cheer Train", "cheertra", "Cheer", "A"],
    [7,18, "Spica", "spica", "Spica", "A"],
    [7,19, "stoic", "stoic", "Stoic", "A"],
    [7,20, "革命(H)", "_kakumei", "革命H", "H"],
    [7,21, "革命(A)", "_kakumei", "革命A", "A"],
    [8,22, "murmur twins", "murmur", "murmur", "A"],
    [8,23, "桜", "_sakura", "桜", "A"],
    [9,24, "Karma", "karma", "Karma", "A"],
    [9,25, "lower world", "loworld", "lower", "A"],
    [9,26, "moon_child", "m_child", "moon", "A"],
    [9,27, "quasar", "quasar", "quasar", "A"],
    [9,28, "RISLIM-Remix-", "rislimr", "RISLIM", "A"],
    [10,29, "GHOST REVIVAL", "ghost", "GHOST", "A"],
    [10,30, "Innocent Walls", "innocent", "Walls", "A"],
    [10,31, "Love Is Eternity", "loveter", "LisE", "A"],
    [10,32, "No.13", "no13", "No.13", "A"],
    [10,33, "One More Lovely", "onemore", "OML", "A"],
    [10,34, "1st Samurai", "1samurai", "1st", "A"],
    [10,35, "雪月花", "_stgekka", "雪月花", "A"],
    [11,36, "AA", "aa_amuro", "AA", "A"],
    [11,37, "BLOCKS", "blocks", "BLOCKS", "A"],
    [11,38, "FAKE TIME(H)", "faketime", "FAKE H", "H"],
    [11,39, "FAKE TIME(A)", "faketime", "FAKE A", "A"],
    [11,40, "GENOCIDE(H)", "genocide", "GENO H", "H"],
    [11,41, "GENOCIDE(A)", "genocide", "GENO A", "A"],
    [11,42, "gigadelic(H)", "gigadel", "giga H", "H"],
    [11,43, "gigadelic(A)", "gigadel", "giga A", "A"],
    [11,44, "RED ZONE†", "redzonel", "RED Z", "A"],
    [11,45, "Sphere", "sphere", "Sphere", "A"],
    [11,46, "spiral galaxy†", "spiral_l", "spiral", "A"],
    [11,47, "ピアノ協奏曲第１番 蠍火", "_psasori", "蠍火", "A"],
    [12,48, "garden", "gardenhs", "garden", "A"],
    [12,49, "INAZUMA", "inazuma", "INAZUMA", "A"],
    [12,50, "Little Little Princess†", "littlepl", "LLP†", "A"],
    [12,51, "SCREAM SQUAD", "sc_squad", "SC SQ", "A"],
    [12,52, "冥", "_mei", "冥", "A"],
    [13,53, "Concertino in Blue", "concert", "Concer", "A"],
    [13,54, "CONTRACT", "contract", "CONTRA", "A"],
    [13,55, "CONTRACT†", "contracl", "CONTRA†", "A"],
    [13,56, "DUE TOMORROW", "due_tmrw", "DUE", "A"],
    [13,57, "Ganymede", "ganymede", "Gany", "A"],
    [13,58, "MINT", "mint", "MINT", "A"],
    [13,59, "tripping contact(teranoid&MC Natsack Remix)", "trip_mc", "trip", "A"],
    [13,60, "waxing and wanding†", "waxing_l", "wax", "A"],
    [13,61, "華蝶風雪", "_kachofu", "華蝶風雪", "A"],
    [13,62, "カゴノトリ～弐式～", "_kagono", "カゴ", "A"],
    [13,63, "嘆きの樹", "_nageki", "嘆き", "A"],
    [14,64, "Candy Galy", "candygal", "Candy", "A"],
    [14,65, "Fascination MAXX", "fas_maxx", "FaXX", "A"],
    [14,66, "INORI", "inori", "INORI", "A"],
    [14,67, "KAMAITACHI", "kmitachi", "KAMA", "A"],
    [14,68, "KAMAITACHI†", "kmitachl", "KAMA †", "A"],
    [14,69, "LASER CRUSTER", "lcruster", "LASER", "A"],
    [14,70, "op.31 叙情", "op31jojo", "op.31", "A"],
    [14,71, "Sense 2007(H)", "sens2007", "SenseH", "H"],
    [14,72, "Sense 2007(A)", "sens2007", "SenseA", "A"],
    [14,73, "smile", "smile", "smile", "A"],
    [14,74, "snow storm", "snwstorm", "snow", "A"],
    [14,75, "TRANOID", "tranoid", "TRANO", "A"],
    [14,76, "VANESSA", "vanessa", "VANE ", "A"],
    [14,77, "VANESSA†", "vanessal", "VANE †", "A"],
    [14,78, "電人、暁に斃れる。", "_fattack", "暁", "A"],
    [15,79, "Anisakis-somatic mutation type Forza", "anisakis", "Anisakis", "A"],
    [15,80, "Be OK", "be_ok", "BeOK", "A"],
    [15,81, "Blue Rain†", "bluerail", "Blue †", "A"],
    [15,82, "Do it!! Do it!!", "doit_emp", "Do it", "A"],
    [15,83, "four pieces of heaven", "fourpces", "four", "A"],
    [15,84, "ICARUS", "icarus", "ICA", "A"],
    [15,85, "ICARUS†", "icarusl", "ICA †", "A"],
    [15,86, "MENDES", "mendes", "MENDES", "A"],
    [15,87, "oratio", "oratio", "oratio", "A"],
    [15,88, "PARANOiA ～HADES～", "pr_hades", "P HADES", "A"],
    [15,89, "satellite020712 from CODED ARMS", "sa2712ac", "sate", "A"],
    [15,90, "State Of The Art", "sotart24", "State", "A"],
    [15,91, "THE DEEP STRIKER†", "tdeepstl", "DEEP †", "A"],
    [15,92, "TROOPERS", "troopers", "TROOPE", "A"],
    [15,93, "Ubertreffen†", "ubertrel", "Uber†", "A"],
    [15,94, "少年A", "_kid_a", "少年A", "A"],
    [15,95, "ミラージュレジデンス", "_m_resid", "ミラージュ", "A"],
    [16,96, "Colorful Cookie", "cocookie", "Cookie", "A"],
    [16,97, "Go Beyond!!", "gobeyond", "Beyond", "A"],
    [16,98, "Kung-fu Empire†", "kungfu_l", "Empire†", "A"],
    [16,99, "Y&Co. is dead or alive", "ycodoa25", "Y&Co", "A"],
    [16,100, "3y3s", "3y3s", "3y3s", "A"],
    [16,101, "卑弥呼", "_himiko", "卑弥呼", "A"],
    [16,102, "ミッドナイト堕天使", "_mdatn24", "堕天使", "A"],
    [16,103, "凛として咲く花の如く†", "_rintosl", "凛†", "A"],
    [17,104, "Almagest", "almag_ra", "Almag", "A"],
    [17,105, "Bad Maniacs", "bmaniacs", "Bad", "A"],
    [17,106, "DOMINION", "dominion", "DOMI", "A"],
    [17,107, "eRAseRmOToRpHAntOM", "ephantom", "sRaseR", "A"],
    [17,108, "Evans", "evans", "Evans", "A"],
    [17,109, "EXUSIA", "exusia", "EXUSIA", "A"],
    [17,110, "G59", "g59", "G59", "A"],
    [17,111, "GALGALIM", "galgalim", "GALGAL", "A"],
    [17,112, "GOLDEN CROSS", "goldcros", "GOLCRO", "A"],
    [17,113, "quell～the seventh slave～", "quell", "quell", "A"],
    [17,114, "Raison d'etre～交差する宿命～", "raison", "Raison", "A"],
    [17,115, "Red. by Full Metal Jacket", "red_fmj", "Red F", "A"],
    [17,116, "SOLID STATE SQUAD", "sssquad", "SOLID", "A"],
    [17,117, "SOLID STATE SQUAD†", "sssquadl", "SOLID†", "A"],
    [17,118, "ワルツ第17番 ト短調 大犬のワルツ", "_valse17", "大犬", "A"],
    [18,119, "Broken", "brokenrb", "Broken", "A"],
    [18,120, "Dances with Snow Fairies", "dancwith", "Dances", "A"],
    [18,121, "ELECTRIC MASSIVE DIVER", "emassive", "MASSIVE", "A"],
    [18,122, "Kailua", "kailua", "Kailua", "A"],
    [18,123, "PARADISE LOST", "paralost", "PARA LOST", "A"],
    [18,124, "perditus†paradisus", "perditus", "p†p", "A"],
    [18,125, "reunion", "reunion", "reunion", "A"],
    [18,126, "SABER WING", "saberwng", "SABER", "A"],
    [18,127, "sakura storm", "sakurast", "sakura s", "A"],
    [18,128, "Session 9-Chronicles-", "session9", "Session", "A"],
    [18,129, "SPECIAL SUMMER CAMPAIGN!", "ssc", "SSCAMP", "A"],
    [18,130, "THE BLACK KNIGHT", "tbknight", "BLACK K", "A"],
    [18,131, "ZETA～素数の世界と超越者～", "zeta", "ZETA", "A"],
    [18,132, "黒髪乱れし修羅となりて", "_krokami", "黒髪", "A"],
    [18,133, "灼熱Beach Side Bunny", "_shakunt", "灼熱", "A"],
    [18,134, "旅人リラン", "_t_rerun", "リラン", "A"],
    [19,135, "BLACK.by X-Cross Fade", "blackbyx", "BLACK X", "A"],
    [19,136, "DIAVOLO", "diavolo", "DIAVOLO", "A"],
    [19,137, "F", "f_amuro", "F", "A"],
    [19,138, "fffff", "fffff", "fffff", "A"],
    [19,139, "HAERETICUS", "haeretic", "HAERETI", "A"],
    [19,140, "Infinite cave", "inf_cave", "cave", "A"],
    [19,141, "NNRT", "nnrt", "NNRT", "A"],
    [19,142, "QUANTUM TELEPORTATION", "quantum", "TELEPO", "A"],
    [19,143, "QUANTUM TELEPORTATION†", "quantuml", "TELEPO†", "A"],
    [19,144, "quaver♪", "quaver", "quaver", "A"],
    [19,145, "Snake Stick", "snakestk", "Stick", "A"],
    [19,146, "The Limbo", "thelimbo", "Limbo", "A"],
    [19,147, "The Sampling Paradise", "t_sample", "Sampli", "A"],
    [19,148, "Todestrieb", "todestri", "Todest", "A"],
    [19,149, "WONDER WALKER", "w_walker", "WONDER", "A"],
    [19,150, "YAKSHA", "yaksha", "YAKSHA", "A"],
    [19,151, "yellow head joe", "yheadjoe", "yhj", "A"],
    [19,152, "子供の落書き帳", "_kodomo", "子供", "A"],
    [19,153, "君のハートにロックオン", "_klockon", "ロックオン", "A"],
    [19,154, "恋する☆宇宙戦争っ!!", "_koisuru", "宇宙戦争", "A"],
    [19,155, "聖人の塔", "_seijin", "聖人", "A"],
    [19,156, "天空の夜明け", "_tkyoake", "天空", "A"],
    [20,157, "Confiserie", "confiser", "Confise", "A"],
    [20,158, "DAY DREAM", "daydream", "DAY DRE", "A"],
    [20,159, "Devilz Staircase", "devilz_s", "D Stair", "A"],
    [20,160, "Elemental Creation", "elecreat", "Ele Cre", "A"],
    [20,161, "FLOWER", "flower", "FLOWER", "A"],
    [20,162, "GAIA", "gaia", "GAIA", "A"],
    [20,163, "Hollywood Galaxy", "holywood", "Holly", "A"],
    [20,164, "JOMANDA", "jomanda", "JOMANDA", "A"],
    [20,165, "Liberation", "liberatn", "Libera", "A"],
    [20,166, "Little Star", "ltl_star", "Little", "A"],
    [20,167, "neu", "neu", "neu", "A"],
    [20,168, "Plan 8", "plan8", "Plan 8", "A"],
    [20,169, "Proof of the existence", "proof_of", "Proof", "A"],
    [20,170, "rumrum triplets", "rumrum", "rumrum", "A"],
    [20,171, "Sol Cosine Job 2", "soljob2", "SCJ2", "A"],
    [20,172, "STULTI", "stulti", "STULTI", "A"],
    [20,173, "SYNC-ANTHEM", "sync_ant", "SYNC-A", "A"],
    [20,174, "Thor's Hammer", "thors_hm", "Thor's", "A"],
    [20,175, "Timepiece phase II", "tpiece_2", "Tpp", "A"],
    [20,176, "Timepiece phase II(CN Ver.)", "tpiececn", "Tpp CN", "A"],
    [20,177, "True Blue", "trueblue", "TRUE", "A"],
    [20,178, "Valanga", "valanga", "Valanga", "A"],
    [20,179, "Zirkfied", "zirkfied", "Zirk", "A"],
    [20,180, "アストライアの双皿", "_astraia", "双皿", "A"],
    [20,181, "カジノファイヤーことみちゃん", "_casino", "カジノ", "A"],
    [20,182, "龍と少女とデコヒーレンス†", "_decohel", "龍と少女†", "A"],
    [20,183, "ΕΛΠΙΣ", "_elpis", "ΕΛΠΙΣ", "A"],
    [20,184, "狂イ咲ケ焔ノ華", "_kuruizk", "狂イ咲ケ", "A"],
    [20,185, "キャトられe&恋はモ～モク", "_kyatora", "キャトられ", "A"],
    [20,186, "†渚の小悪魔ラヴリィ～レイディオ†(IIDX EDIT)", "_nagisa", "渚", "A"],
    [20,187, "音楽", "_ongaku", "音楽", "A"],
    [20,188, "シュレーディンガーの猫", "_schrcat", "猫", "A"],
    [20,189, "即席！脳直★ミュージックシステム", "_sokseki", "即席", "A"],
    [20,190, "たまゆら", "_tamayra", "たまゆら", "A"],
    [20,191, "仮想空間の旅人たち†", "_travell", "仮想空間†", "A"],
    [20,192, "トリカゴノ鳳凰", "_trikago", "トリカゴノ", "A"],
    [21,193, "Adularia", "adularia", "Adularia", "A"],
    [21,194, "Ancient Scapes", "ancients", "Ancient S", "A"],
    [21,195, "Ancient Scapes†LEGGENDARIA", "ancientl", "Ancient S†", "A"],
    [21,196, "BRAINSTORM", "brainstm", "BRAIN", "A"],
    [21,197, "Close the World feat.a☆ru", "closewld", "Close", "A"],
    [21,198, "Close the World feat.a☆ru†LEGGENDARIA", "closewdl", "Close†", "A"],
    [21,199, "DARK LEGACY", "darklgcy", "DARK ", "A"],
    [21,200, "Elektrick U-Phoria", "euphoria", "U-Phoria", "A"],
    [21,201, "Feel The Beat†LEGGENDARIA", "feelbetl", "Feel†", "A"],
    [21,202, "I will be back-オレは帰ってきた-", "iwilback", "I will", "A"],
    [21,203, "Idola", "idola", "Idora", "A"],
    [21,204, "Immortal", "immortal", "Immort", "A"],
    [21,205, "INSOMNIA", "insomnia", "INSOMNIA", "A"],
    [21,206, "invoker", "invoker", "invoker", "A"],
    [21,207, "invoker†LEGGENDARIA", "invokerl", "invoker†", "A"],
    [21,208, "KAISER PHOENIX†", "kaiserpl", "KAISER†", "A"],
    [21,209, "Last Dance", "lstdance", "Last D", "A"],
    [21,210, "PUNISHER", "punisher", "PUNISH", "A"],
    [21,211, "ra'am", "raam", "raam", "A"],
    [21,212, "rainbow guitar weeps", "rbguitar", "rgw", "A"],
    [21,213, "RIZING YOU UP", "rizingup", "RIZING", "A"],
    [21,214, "Sigmund", "sigmund", "Sigmund", "A"],
    [21,215, "Sigmund†LEGGENDARIA", "sigmundl", "Sigmund†", "A"],
    [21,216, "Unicorn tail", "unicorn", "Unicorn", "A"],
    [21,217, "Verflucht", "verflcht", "Verflu", "A"],
    [21,218, "Verflucht†LEGGENDARIA", "verflchl", "Verflu†", "A"],
    [21,219, "VOX UP", "voxup_sp", "VOX U", "A"],
    [21,220, "バンブーソード・ガール", "_bamboos", "バンブー", "A"],
    [21,221, "煉獄のエルフェリア", "_elefthe", "煉獄", "A"],
    [21,222, "疾風迅雷", "_ltspeed", "疾風", "A"],
    [21,223, "疾風迅雷†LEGGENDARIA", "_ltspedl", "疾風†", "A"],
    [21,224, "IX", "_nine_ix", "IX", "A"],
    [21,225, "旋律のドグマ～Miserables～", "_s_dogma", "ドグマ", "A"],
    [21,226, "轟け！恋のビーンボール！！", "_todorok", "轟け", "A"],
    [21,227, "廿†", "_twentyl", "廿†", "A"],
    [21,228, "海神", "_wadatmi", "海神", "A"],
    [22,229, "Beat Radiance†", "beatradl", "Beat R†", "A"],
    [22,230, "Broken Sword", "brokensw", "BroSwo", "A"],
    [22,231, "CHRONO DIVER -NORNIR-†", "chrononl", "NORNIR†", "A"],
    [22,232, "Chrono Diver -PENDULUMs-", "chrono_p", "CD PEN", "A"],
    [22,233, "cinder", "cinder", "cinder", "A"],
    [22,234, "Cosmic Cat†", "cosmical", "Cosmic†", "A"],
    [22,235, "Despair of ELFERIA", "delferia", "Despair", "A"],
    [22,236, "EBONY & IVORY", "ebnyivry", "E&I", "A"],
    [22,237, "EBONY & IVORY†", "ebnyivrl", "E&I †", "A"],
    [22,238, "entelecheia", "entelech", "entele", "A"],
    [22,239, "fallen leaves -IIDX edition-", "faleaves", "fallen", "A"],
    [22,240, "FANTASTIC THREE", "fanthree", "FANTAS", "A"],
    [22,241, "Flashes", "flashes", "Flashes", "A"],
    [22,242, "Gravigazer", "gravigzr", "Gravi", "A"],
    [22,243, "Invitation from Mr.C", "invi_mrc", "invi MrC", "A"],
    [22,244, "Night sky", "nightsky", "Night s", "A"],
    [22,245, "Rave*it!! Rave*it!!", "rave_it", "Rave*it", "A"],
    [22,246, "Reflux", "reflux", "Refulx", "A"],
    [22,247, "Say YEEEAHH", "say_yeah", "Say YE", "A"],
    [22,248, "Shooting Fireball", "shootfir", "ShootF", "A"],
    [22,249, "Sounds Of Summer", "sosummer", "S Of S", "A"],
    [22,250, "SpaceLand☆TOYBOX", "sptoybox", "S☆TOY", "A"],
    [22,251, "The Least 100sec", "t_100sec", "TL100s", "A"],
    [22,252, "TIEFSEE", "tiefsee", "TIEFSEE", "A"],
    [22,253, "TOXIC VIBRATION", "toxicvib", "TOXICV", "A"],
    [22,254, "We're so Happy(P*Light Remix) IIDX ver.", "wesoh_pl", "We're", "A"],
    [22,255, "ZZ", "zz_amuro", "ZZ", "A"],
    [22,256, "表裏一体!?怪盗いいんちょの悩みe&", "_hyouri", "怪盗", "A"],
    [22,257, "共鳴遊戯の華", "_kyoumei", "共鳴", "A"],
    [22,258, "リリーゼと炎龍レーヴァテイン", "_lilieze", "リリーゼ", "A"],
    [22,259, "夏色DIARY - L.E.D.-G STYLE MIX -", "_ntdiary", "夏色", "A"],
    [22,260, "鬼天", "_onigami", "鬼天", "A"],
    [22,261, "千年ノ理", "_sennen", "千年", "A"],
    [22,262, "少年は空を辿る", "_soratad", "少年空", "A"],
    [22,263, "それは花火のような恋", "_shanabi", "花火", "A"],
    [22,264, "超青少年ノ為ノ超多幸ナ超古典的超舞曲", "_verycls", "超青少年", "A"],
    [22,265, "超青少年ノ為ノ超多幸ナ超古典的超舞曲†", "_verycsl", "超青少年†", "A"],
    [22,266, "Ｘ↑Ｘ↓", "_x7xl", "X↑X↓", "A"],
    [23,267, "AO-1", "ao_1", "AO-1", "A"],
    [23,268, "Battle Train-IIDX Edition-", "btltrain", "BT IIDX", "A"],
    [23,269, "Blue Spring Express", "blspring", "BlueSE", "A"],
    [23,270, "chaos eater-IIDX edition-", "chaoseat", "chaos e", "A"],
    [23,271, "CODE1 revision1.0.1", "code_1", "CODE1", "A"],
    [23,272, "Devil's Gear", "dvlsgear", "Devil G", "A"],
    [23,273, "DIAMOND CROSSING", "diacross", "DIAMOND", "A"],
    [23,274, "Dynamite", "dynausao", "Dynamite", "A"],
    [23,275, "GET READY!!", "getready", "GET READY", "A"],
    [23,276, "GOBBLE", "gobblecp", "GOBBLE", "H"],
    [23,277, "Godspeed", "godspeed", "Godsp", "A"],
    [23,278, "Grand Chariot", "gchariot", "GrandC", "A"],
    [23,279, "Highcharge Divolt", "hicharge", "High D", "A"],
    [23,280, "M4K3 1T B0UNC3", "m4k3_1t", "M4K3", "A"],
    [23,281, "Nightmare before oversleep", "nightbfr", "Nbo", "A"],
    [23,282, "NINJA IS DEAD IIDX ver.", "ninja_dd", "NINJA", "A"],
    [23,283, "NZM", "nzm", "NZM", "A"],
    [23,284, "POSSESSION", "posesion", "POSSE", "A"],
    [23,285, "refrain", "refrain", "refrain", "A"],
    [23,286, "STARLIGHT DANCEHALL†", "starltdl", "STAR D†", "A"],
    [23,287, "StrayedCatz", "strycatz", "Strayed", "A"],
    [23,288, "Triple Counter", "tripleco", "TripleC", "A"],
    [23,289, "X", "x_amuro", "X", "A"],
    [23,290, "199024club -ReBounceKiller-", "199024cl", "199024", "A"],
    [23,291, "紫陽花 -AZISAI-", "_azisai", "紫陽花", "A"],
    [23,292, "駅猫のワルツ", "_ekineko", "駅猫", "A"],
    [23,293, "炸裂！イェーガー電光チョップ!!(JAEGER FINAL ATTACK)", "_jfinala", "電光チョップ", "A"],
    [23,294, "めいさいアイドル☆あいむちゃん♪", "_meisai", "めいさい", "A"],
    [23,295, "灼熱 Pt.2 Long Train Running", "_syaku_2", "灼熱 Pt.2", "A"],
    [23,296, "真 地獄超特急 -HELL or HELL-", "_sjigoku", "地獄超特急", "A"],
    [24,297, "Amazing Mirage†", "amazingl", "Amazing†", "A"],
    [24,298, "Apocalypse", "apocalrf", "Apocalypse", "A"],
    [24,299, "BabeL ～Grand Story～", "babel_gs", "BabeL", "A"],
    [24,300, "Caterpillar", "caterpil", "Caterpillar", "A"],
    [24,301, "DISAPPEAR feat. koyomin", "disapear", "DISAPPERA", "A"],
    [24,302, "DORNWALD ～Junge～", "dornwald", "DORNWALD", "A"],
    [24,303, "ECHIDNA", "echidna", "ECHIDNA", "A"],
    [24,304, "FUZIN RIZIN", "fuznrizn", "FUZIN", "A"],
    [24,305, "Go Ahead!!", "goahead", "Go Ahead", "A"],
    [24,306, "GuNGNiR", "gungnir", "GuNGNiR", "A"],
    [24,307, "HADES", "hadesmnk", "HADES", "A"],
    [24,308, "Mare Nectaris", "marenect", "Nectaris", "A"],
    [24,309, "OTENAMI Hurricane", "otenamih", "OTEMANI", "A"],
    [24,310, "Quakes", "quakes", "Quakes", "A"],
    [24,311, "RAIN", "rain", "RAIN", "A"],
    [24,312, "Rave Cannon", "rvcannon", "Rave", "A"],
    [24,313, "SEQUENCE CAT", "sequence", "SEQUENCE", "A"],
    [24,314, "Shoot'Em All", "shoot_em", "ShootEm", "A"],
    [24,315, "Sky High", "skyhigh", "Sky", "A"],
    [24,316, "Snakey Kung-fu", "snkungfu", "Snakey", "A"],
    [24,317, "Summerlights(IIDX Edition)", "summerlt", "Summer l", "A"],
    [24,318, "Super Rush", "superush", "Super", "A"],
    [24,319, "TOGAKUSHI", "togakusi", "TOGAKUSHI", "A"],
    [24,320, "刃図羅", "_buzra", "刃図羅", "A"],
    [24,321, "童話回廊", "_dowakai", "童話回廊", "A"],
    [24,322, "焔極OVERKILL", "_enkyoku", "焔極", "A"],
    [24,323, "焱影", "_hikage", "焱影", "A"],
    [24,324, "イザナミノナゲキ", "_izanami", "イザナミ", "A"],
    [24,325, "九尾狐夜行", "_kyubi", "九尾", "A"],
    [24,326, "〆", "_shime", "〆", "A"],
    [24,327, "津軽雪", "_tgryuki", "津軽雪", "A"],
    [25,328, "AA -rebuild-", "aa_rebld", "AA re", "A"],
    [25,329, "ANCHOR", "anchor", "ANCHOR", "A"],
    [25,330, "Antigravity", "antigrav", "Anti", "A"],
    [25,331, "Arca", "arca", "Arca", "A"],
    [25,332, "Boomy and The Boost", "booboost", "Boomy", "A"],
    [25,333, "DEADHEAT", "deadheat", "DEAD", "A"],
    [25,334, "DEATH†ZIGOQ～怒りの高速爆走野郎～", "dthzigoq", "DEATH", "A"],
    [25,335, "DropZ-Line-", "dropz_ln", "DropZ", "A"],
    [25,336, "Eine Haube ～聖地の果てにあるもの～", "einehaub", "Eine", "A"],
    [25,337, "EMERALDAS", "emeralds", "EMERALD", "A"],
    [25,338, "encounter", "encountr", "encounter", "A"],
    [25,339, "HYPE THE CORE", "hypecore", "HYPE", "A"],
    [25,340, "Illusionary Waterlily", "illuswtr", "Illusionary", "A"],
    [25,341, "Initiation", "initiatn", "Initiation", "A"],
    [25,342, "Life Is A Game ft.DD ナカタ Metal", "lifegame", "Life", "A"],
    [25,343, "Mira", "mira", "Mira", "A"],
    [25,344, "NITROUS CANNON", "nitrous", "NITOROUS", "A"],
    [25,345, "Papilio ulysses", "papilio", "Papilio", "A"],
    [25,346, "Persephone", "prsphone", "Persephone", "A"],
    [25,347, "Rampage", "rampage", "Rampage", "A"],
    [25,348, "Raspberry Railgun", "rrailgun", "Raspberry", "A"],
    [25,349, "Slipstream", "slipstrm", "Slip", "A"],
    [25,350, "The Chase", "thechase", "Chase", "A"],
    [25,351, "Usual Days-remix", "usualday", "Usual", "A"],
    [25,352, "VOX RUSH", "vox_rush", "VOX R", "A"],
    [25,353, "Xperanza", "xperanza", "Xperanza", "A"],
    [25,354, "255", "255_255", "255", "A"],
    [25,355, "シムルグの目醒め", "_simurgh", "シムルグ", "A"],
    [25,356, "神謳 -RESONANCE-", "_resonan", "神謳", "A"],
    [25,357, "東京神話", "_tksinwa", "東京神話", "A"],
    [26,358, "Catch Our Fire!", "catchfir", "Catch", "A"],
    [26,359, "dAuntl3ss", "dauntl3s", "dAunt3ss", "A"],
    [26,360, "Dr.Chemical & Killing Machine", "dr_chemi", "Dr.C", "A"],
    [26,361, "Drastic Dramatic", "drasticd", "Drastic", "A"],
    [26,362, "GIGA THRASH", "gigathra", "GIGA", "A"],
    [26,363, "KILL EACH OTHER", "killeach", "KILL", "A"],
    [26,364, "L.F.O", "lfo", "L.F.O", "A"],
    [26,365, "Level One", "levelone", "Lv One", "A"],
    [26,366, "LOST TECHNOLOGIE", "losttech", "LOST TEC", "A"],
    [26,367, "Painful Fate", "painfate", "Painful", "A"],
    [26,368, "Red. by Jack Trance", "red_jack", "Red J", "A"],
    [26,369, "SIGMA", "sigma", "SIGMA", "A"],
    [26,370, "THE DAY OF JUBILATIONS", "t_jubila", "JUBI", "A"],
    [26,371, "The Rebellion of Sequencer", "t_rebeli", "TRoS", "A"],
    [26,372, "Xlo", "xlo", "Xlo", "A"],
    [26,373, "金野火織の金色提言", "_k_hiori", "金色", "A"]

]


VER_NAME_INDEX = 2;

ver_table = [
    [2, 0, "Substream"],
    [3, 1, "3rd style"],
    [4, 2, "4th style"],
    [5, 3, "5th style"],
    [6, 4, "6th style"],
    [7, 5, "7th style"],
    [8, 6, "8th style"],
    [9, 8, "9th style"],
    [10, 9, "10th style"],
    [11, 10, "IIDX RED"],
    [12, 11, "HAPPY SKY"],
    [13, 12, "Distorted"],
    [14, 13, "GOLD"],
    [15, 14, "DJ TROOPERS"],
    [16, 15, "EMPRESS"],
    [17, 16, "SIRIUS"],
    [18, 17, "Resort Anthem"],
    [19, 18, "Lincle"],
    [20, 19, "tricolo"],
    [21, 20, "SPADA"],
    [22, 21, "PENDUAL"],
    [23, 22, "copula"],
    [24, 23, "SINOBUZ"],
    [25, 24, "CANNON BALLERS"],
    [26, 25, "Rootage"]
]