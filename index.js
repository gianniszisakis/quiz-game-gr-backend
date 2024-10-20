const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const generalQuestions = [
  {
    id: "1",
    question: "Ποια είναι η πρωτεύουσα της Γαλλίας;",
    options: ["Ρώμη", "Παρίσι", "Μαδρίτη", "Λονδίνο"],
    correct_answer: "Παρίσι",
  },
  {
    id: "2",
    question: "Πόσα λεπτά έχει μία ώρα;",
    options: ["50", "60", "70", "80"],
    correct_answer: "60",
  },
  {
    id: "3",
    question: "Ποιος είναι ο μεγαλύτερος πλανήτης στο ηλιακό μας σύστημα;",
    options: ["Άρης", "Γη", "Δίας", "Αφροδίτη"],
    correct_answer: "Δίας",
  },
  {
    id: "4",
    question: "Ποια χώρα φιλοξένησε τους Ολυμπιακούς Αγώνες το 2004;",
    options: ["Ηνωμένες Πολιτείες", "Ελλάδα", "Κίνα", "Γερμανία"],
    correct_answer: "Ελλάδα",
  },
  {
    id: "5",
    question: "Ποιος ανακάλυψε τη βαρύτητα;",
    options: ["Άλμπερτ Αϊνστάιν", "Ισαάκ Νεύτων", "Γαλιλαίος", "Πυθαγόρας"],
    correct_answer: "Ισαάκ Νεύτων",
  },
  {
    id: "6",
    question: "Ποιο είναι το μεγαλύτερο ζώο στη γη;",
    options: ["Φάλαινα", "Ελέφαντας", "Καμηλοπάρδαλη", "Ιπποπόταμος"],
    correct_answer: "Φάλαινα",
  },
  {
    id: "7",
    question: "Ποιός είναι ο συγγραφέας του 'Οδύσσεια';",
    options: ["Όμηρος", "Ηρόδοτος", "Σωκράτης", "Πλάτων"],
    correct_answer: "Όμηρος",
  },
  {
    id: "8",
    question: "Ποια είναι η πιο πυκνοκατοικημένη χώρα στον κόσμο;",
    options: ["Κίνα", "Ινδία", "Ηνωμένες Πολιτείες", "Ρωσία"],
    correct_answer: "Μονακό",
  },
  {
    id: "9",
    question: "Ποιος είναι ο θεός του πολέμου στην ελληνική μυθολογία;",
    options: ["Δίας", "Αθηνά", "Άρης", "Ποσειδώνας"],
    correct_answer: "Άρης",
  },
  {
    id: "10",
    question: "Ποιο είναι το πιο ψηλό βουνό στον κόσμο;",
    options: ["Κιλιμάντζαρο", "Άλπεις", "Έβερεστ", "Άνδεις"],
    correct_answer: "Έβερεστ",
  },
  {
    id: "11",
    question: "Ποια είναι η μεγαλύτερη θάλασσα στον κόσμο;",
    options: ["Μεσόγειος", "Καραϊβική", "Νότια Σινική", "Αραβική"],
    correct_answer: "Νότια Σινική",
  },
  {
    id: "12",
    question: "Ποιος είναι ο πιο γνωστός πίνακας του Λεονάρντο ντα Βίντσι;",
    options: [
      "Η Μόνα Λίζα",
      "Η τελευταία δείπνος",
      "Το Βάπτισμα του Χριστού",
      "Η Σχολή των Αθηνών",
    ],
    correct_answer: "Η Μόνα Λίζα",
  },
  {
    id: "13",
    question: "Ποιο είναι το μεγαλύτερο ωκεανό στον κόσμο;",
    options: ["Ατλαντικός", "Ινδικός", "Ειρηνικός", "Βόρειος Πολικός"],
    correct_answer: "Ειρηνικός",
  },
  {
    id: "14",
    question: "Ποιο είναι το εθνικό νόμισμα της Ιαπωνίας;",
    options: ["Δολάριο", "Γιέν", "Ευρώ", "Πένι"],
    correct_answer: "Γιέν",
  },
  {
    id: "15",
    question: "Ποια είναι η επίσημη γλώσσα της Βραζιλίας;",
    options: ["Ισπανικά", "Πορτογαλικά", "Γαλλικά", "Αγγλικά"],
    correct_answer: "Πορτογαλικά",
  },
  {
    id: "16",
    question: "Ποιο είναι το μεγαλύτερο νησί στον κόσμο;",
    options: ["Γροιλανδία", "Νέα Γη", "Μπρούκλαντ", "Σουηδία"],
    correct_answer: "Γροιλανδία",
  },
  {
    id: "17",
    question: "Ποιος ήταν ο πρώτος πρόεδρος των Ηνωμένων Πολιτειών;",
    options: [
      "Τόμας Τζέφερσον",
      "Αβραάμ Λίνκολν",
      "Γεώργιος Ουάσινγκτον",
      "Θίοντορ Ρούσβελτ",
    ],
    correct_answer: "Γεώργιος Ουάσινγκτον",
  },
  {
    id: "18",
    question: "Ποιο είναι το πιο συχνό στοιχείο στο σύμπαν;",
    options: ["Οξυγόνο", "Υδρογόνο", "Άζωτο", "Ήλιο"],
    correct_answer: "Υδρογόνο",
  },
  {
    id: "19",
    question: "Ποιο είναι το πιο κοντινό αστέρι στη Γη;",
    options: ["Σείριος", "Πολυδεύκης", "Αλφα Κενταύρου", "Πλανήτης Άρης"],
    correct_answer: "Αλφα Κενταύρου",
  },
  {
    id: "20",
    question: "Ποια είναι η μεγαλύτερη έρημος στον κόσμο;",
    options: ["Σαχάρα", "Γκόμπι", "Αραβική", "Καλχάρι"],
    correct_answer: "Σαχάρα",
  },
  {
    id: "21",
    question: "Ποιος είναι ο δημιουργός του Facebook;",
    options: ["Μάικλ Ζούκερμπεργκ", "Μπιλ Γκέιτς", "Στιβ Τζομπς", "Λάρι Πέιτζ"],
    correct_answer: "Μάικλ Ζούκερμπεργκ",
  },
  {
    id: "22",
    question: "Ποιο είναι το εθνικό ζώο της Σκωτίας;",
    options: ["Λιοντάρι", "Ταύρος", "Κριός", "Υάκινθος"],
    correct_answer: "Λιοντάρι",
  },
  {
    id: "23",
    question: "Ποια είναι η παλαιότερη γνωστή πολιτεία στον κόσμο;",
    options: ["Αίγυπτος", "Σουμερία", "Ελλάδα", "Ρώμη"],
    correct_answer: "Σουμερία",
  },
  {
    id: "24",
    question: "Ποιος είναι ο πιο διάσημος αρχαίος Έλληνας φιλόσοφος;",
    options: ["Σωκράτης", "Πλάτωνας", "Αριστοτέλης", "Δημόκριτος"],
    correct_answer: "Σωκράτης",
  },
  {
    id: "25",
    question: "Ποια είναι η πιο βαθιά λίμνη στον κόσμο;",
    options: [
      "Λίμνη Βαϊκάλη",
      "Λίμνη Τανγκανίκα",
      "Λίμνη Μεγάλη Αλμυρή",
      "Λίμνη Εριέ",
    ],
    correct_answer: "Λίμνη Βαϊκάλη",
  },
  {
    id: "26",
    question: "Ποια είναι η μεγαλύτερη χώρα στον κόσμο;",
    options: ["Κίνα", "Ηνωμένες Πολιτείες", "Ρωσία", "Καναδάς"],
    correct_answer: "Ρωσία",
  },
  {
    id: "27",
    question: "Ποιο είναι το κέντρο του ηλιακού μας συστήματος;",
    options: ["Γη", "Σελήνη", "Ήλιος", "Αρης"],
    correct_answer: "Ήλιος",
  },
  {
    id: "28",
    question: "Ποιο είναι το πιο δημοφιλές άθλημα στον κόσμο;",
    options: ["Ποδόσφαιρο", "Μπάσκετ", "Τένις", "Χόκεϊ"],
    correct_answer: "Ποδόσφαιρο",
  },
  {
    id: "29",
    question: "Ποιο είναι το εθνικό ποτό της Ιαπωνίας;",
    options: ["Σάκε", "Τσάι", "Ουίσκι", "Μπίρα"],
    correct_answer: "Σάκε",
  },
  {
    id: "30",
    question: "Ποιο είναι το μεγαλύτερο δάσος στον κόσμο;",
    options: ["Αμαζόνιο", "Μαύρο Δάσος", "Σιβηρία", "Βόρεια Αμερική"],
    correct_answer: "Αμαζόνιο",
  },
  {
    id: "31",
    question: "Ποιο είναι το σύμβολο του στοιχείου του σιδήρου;",
    options: ["Fe", "Si", "Ir", "I"],
    correct_answer: "Fe",
  },
  {
    id: "32",
    question: "Ποιος ήταν ο πρώτος άνθρωπος που πάτησε στη Σελήνη;",
    options: [
      "Νηλ Άρμστρονγκ",
      "Μπαζ Όλντριν",
      "Γιούρι Γκαγκάριν",
      "Τζον Γκλεν",
    ],
    correct_answer: "Νηλ Άρμστρονγκ",
  },
  {
    id: "33",
    question: "Ποια είναι η κυριότερη θρησκεία στην Ινδία;",
    options: ["Βουδισμός", "Ινδουισμός", "Ισλάμ", "Χριστιανισμός"],
    correct_answer: "Ινδουισμός",
  },
  {
    id: "34",
    question: "Ποια είναι η πρωτεύουσα της Ιταλίας;",
    options: ["Ρώμη", "Φλωρεντία", "Μιλάνο", "Νάπολη"],
    correct_answer: "Ρώμη",
  },
  {
    id: "35",
    question: "Ποια είναι η πιο κρύα ήπειρος;",
    options: ["Ασία", "Αφρική", "Ανταρκτική", "Βόρεια Αμερική"],
    correct_answer: "Ανταρκτική",
  },
  {
    id: "36",
    question: "Ποιο είναι το πιο πυκνό ζώο;",
    options: ["Σφίγγα", "Ελέφαντας", "Γάτα", "Κουνέλι"],
    correct_answer: "Σφίγγα",
  },
  {
    id: "37",
    question: "Ποια είναι η πιο μακριά χώρα από την Ελλάδα;",
    options: ["Ιαπωνία", "Αυστραλία", "Αμερική", "Νότια Αφρική"],
    correct_answer: "Αυστραλία",
  },
  {
    id: "38",
    question: "Ποιο είναι το πιο πολυσύχναστο αεροδρόμιο στον κόσμο;",
    options: [
      "Αεροδρόμιο Χάρτσφιλντ-Τζάκσον",
      "Αεροδρόμιο Σικάγο Ο'Χάρε",
      "Αεροδρόμιο Λονδίνου Χίθροου",
      "Αεροδρόμιο Λος Άντζελες",
    ],
    correct_answer: "Αεροδρόμιο Χάρτσφιλντ-Τζάκσον",
  },
  {
    id: "39",
    question: "Ποια είναι η πρωτεύουσα της Ινδίας;",
    options: ["Νέο Δελχί", "Μουμπάι", "Καλκούτα", "Χαϊντεραμπάντ"],
    correct_answer: "Νέο Δελχί",
  },
  {
    id: "40",
    question: "Ποια είναι η βασική μονάδα μέτρησης του ηλεκτρισμού;",
    options: ["Βολτ", "Αμπέρ", "Οχά", "Ομογένεια"],
    correct_answer: "Αμπέρ",
  },
  {
    id: "41",
    question: "Ποιος είναι ο πιο διάσημος πίνακας του Βαν Γκογκ;",
    options: [
      "Η Νύχτα με τα Αστέρια",
      "Η Δωρεά των Μάγων",
      "Η Στροφή του Κεφαλιού",
      "Η Φωτιά",
    ],
    correct_answer: "Η Νύχτα με τα Αστέρια",
  },
  {
    id: "42",
    question: "Ποιο είναι το βασικό συστατικό του ψωμιού;",
    options: ["Αλεύρι", "Νερό", "Αλάτι", "Ζάχαρη"],
    correct_answer: "Αλεύρι",
  },
  {
    id: "43",
    question: "Ποια είναι η μεγαλύτερη ήπειρος;",
    options: ["Ασία", "Αφρική", "Βόρεια Αμερική", "Νότια Αμερική"],
    correct_answer: "Ασία",
  },
  {
    id: "44",
    question: "Ποια είναι η πρωτεύουσα του Καναδά;",
    options: ["Οτάβα", "Τορόντο", "Βανκούβερ", "Μόντρεαλ"],
    correct_answer: "Οτάβα",
  },
  {
    id: "45",
    question: "Ποια είναι η πιο διάσημη πυραμίδα στην Αίγυπτο;",
    options: [
      "Πυραμίδα του Χέοπα",
      "Πυραμίδα του Χεφρήνου",
      "Πυραμίδα του Μυκεναίου",
      "Πυραμίδα του Δομίνικου",
    ],
    correct_answer: "Πυραμίδα του Χέοπα",
  },
  {
    id: "46",
    question: "Ποιο είναι το μεγαλύτερο ποτάμι στον κόσμο;",
    options: ["Αμαζόνιος", "Νείλος", "Μισισιπής", "Δούναβης"],
    correct_answer: "Αμαζόνιος",
  },
  {
    id: "47",
    question: "Ποια είναι η πιο συχνή ασθένεια στον κόσμο;",
    options: ["Γρίπη", "Πνευμονία", "Κρυολόγημα", "Καρκίνος"],
    correct_answer: "Κρυολόγημα",
  },
  {
    id: "48",
    question: "Ποιος είναι ο πιο γρήγορος ζωντανός οργανισμός;",
    options: ["Φάλαινα", "Αετός", "Λιγκουρίος", "Λιοντάρι"],
    correct_answer: "Αετός",
  },
  {
    id: "49",
    question: "Ποια είναι η πρωτεύουσα της Αυστραλίας;",
    options: ["Σίδνεϊ", "Μελβούρνη", "Καμπέρα", "Περθ"],
    correct_answer: "Καμπέρα",
  },
  {
    id: "50",
    question: "Ποια είναι η πιο διάσημη μπάντα της δεκαετίας του '60;",
    options: ["The Beatles", "The Rolling Stones", "The Doors", "Led Zeppelin"],
    correct_answer: "The Beatles",
  },
  {
    id: "51",
    question: "Ποιο είναι το σύμβολο του στοιχείου του οξυγόνου;",
    options: ["O", "O2", "O3", "O2-"],
    correct_answer: "O",
  },
  {
    id: "52",
    question: "Ποια είναι η πιο διαδεδομένη γλώσσα στον κόσμο;",
    options: ["Αγγλικά", "Ισπανικά", "Κινέζικα", "Γαλλικά"],
    correct_answer: "Αγγλικά",
  },
  {
    id: "53",
    question: "Ποιος είναι ο πιο διάσημος συγγραφέας μυθιστορημάτων;",
    options: ["Τζέιμς Τζόις", "Τζορτζ Όργουελ", "Μαρσέλ Προυστ", "Χάρυ Πότερ"],
    correct_answer: "Τζορτζ Όργουελ",
  },
  {
    id: "54",
    question: "Ποιο είναι το μεγαλύτερο νησί της Ελλάδας;",
    options: ["Κρήτη", "Ρόδος", "Κέρκυρα", "Λέσβος"],
    correct_answer: "Κρήτη",
  },
  {
    id: "55",
    question: "Ποια είναι η πιο επικίνδυνη ασθένεια στον κόσμο;",
    options: ["Καρκίνος", "AIDS", "Γρίπη", "Διαβήτης"],
    correct_answer: "AIDS",
  },
  {
    id: "56",
    question: "Ποια είναι η πρωτεύουσα της Τουρκίας;",
    options: ["Κωνσταντινούπολη", "Αγκυρα", "Σμύρνη", "Αττάλεια"],
    correct_answer: "Αγκυρα",
  },
  {
    id: "57",
    question: "Ποιο είναι το μεγαλύτερο ωκεανό;",
    options: ["Ειρηνικός", "Ατλαντικός", "Ινδικός", "Βόρειος Παγωμένος"],
    correct_answer: "Ειρηνικός",
  },
  {
    id: "58",
    question: "Ποια είναι η πιο γνωστή γιορτή της Αμερικής;",
    options: [
      "Ημέρα των Ευχαριστιών",
      "Χριστούγεννα",
      "Πρωτοχρονιά",
      "Ημέρα της Ανεξαρτησίας",
    ],
    correct_answer: "Ημέρα της Ανεξαρτησίας",
  },
  {
    id: "59",
    question: "Ποιο είναι το πιο κοινό ζώο στο σπίτι;",
    options: ["Γάτα", "Σκύλος", "Πάπια", "Κουνέλι"],
    correct_answer: "Γάτα",
  },
  {
    id: "60",
    question: "Ποιο είναι το πιο δημοφιλές φαγητό στην Ιταλία;",
    options: ["Πίτσα", "Ζυμαρικά", "Ριζότο", "Γλυκά"],
    correct_answer: "Πίτσα",
  },
  {
    id: "61",
    question: "Ποια είναι η πιο αναγνωρίσιμη σημαία στον κόσμο;",
    options: [
      "Σημαία της Αμερικής",
      "Σημαία της Κίνας",
      "Σημαία της Ιαπωνίας",
      "Σημαία της Γερμανίας",
    ],
    correct_answer: "Σημαία της Αμερικής",
  },
  {
    id: "62",
    question: "Ποιος είναι ο πιο διάσημος χαρακτήρας κινουμένων σχεδίων;",
    options: ["Μickey Mouse", "Donald Duck", "Goofy", "Bugs Bunny"],
    correct_answer: "Mickey Mouse",
  },
  {
    id: "63",
    question: "Ποιο είναι το πιο υψηλό βουνό στον κόσμο;",
    options: ["Κιλιμάντζαρο", "Άλπεις", "Αυστραλία", "Έβερεστ"],
    correct_answer: "Έβερεστ",
  },
  {
    id: "64",
    question: "Ποια είναι η πρωτεύουσα της Βραζιλίας;",
    options: ["Μπραζίλια", "Ρίο ντε Τζανέιρο", "Σάο Πάολο", "Μπαχία"],
    correct_answer: "Μπραζίλια",
  },
  {
    id: "65",
    question: "Ποια είναι η βασική μονάδα μέτρησης του μήκους;",
    options: ["Χιλιόμετρο", "Μέτρο", "Εκατοστό", "Μιλιόμετρο"],
    correct_answer: "Μέτρο",
  },
  {
    id: "66",
    question: "Ποιο είναι το πιο συχνό όνομα στον κόσμο;",
    options: ["Μαρία", "Γιάννης", "Αλίκη", "Αλέξανδρος"],
    correct_answer: "Μαρία",
  },
  {
    id: "67",
    question: "Ποιο είναι το πιο σπάνιο ζώο στον κόσμο;",
    options: ["Αρκτική αλεπού", "Λευκή τίγρης", "Κόκκινος λύκος", "Σαφάρι"],
    correct_answer: "Λευκή τίγρης",
  },
  {
    id: "68",
    question: "Ποια είναι η πιο διάσημη θεατρική παράσταση;",
    options: [
      "Ρωμαίος και Ιουλιέτα",
      "Αμλετ",
      "Οθέλλος",
      "Το Ημερολόγιο ενός Σαββατοκύριακου",
    ],
    correct_answer: "Ρωμαίος και Ιουλιέτα",
  },
  {
    id: "69",
    question: "Ποια είναι η πρωτεύουσα της Νότιας Κορέας;",
    options: ["Σεούλ", "Πιονγκγιάνγκ", "Βιετνάμ", "Μανίλα"],
    correct_answer: "Σεούλ",
  },
  {
    id: "70",
    question: "Ποιο είναι το πιο διαδεδομένο αθλημα στον κόσμο;",
    options: ["Ποδόσφαιρο", "Μπάσκετ", "Τένις", "Κρίκετ"],
    correct_answer: "Ποδόσφαιρο",
  },
  {
    id: "71",
    question: "Ποια είναι η πιο διαδεδομένη μορφή τέχνης;",
    options: ["Μουσική", "Εικόνα", "Θέατρο", "Χορός"],
    correct_answer: "Μουσική",
  },
  {
    id: "72",
    question: "Ποιο είναι το πιο υψηλό κτίριο στον κόσμο;",
    options: [
      "Burj Khalifa",
      "Shanghai Tower",
      "Abraj Al Bait",
      "One World Trade Center",
    ],
    correct_answer: "Burj Khalifa",
  },
  {
    id: "73",
    question: "Ποια είναι η πιο δημοφιλής μουσική κατηγορία;",
    options: ["Pop", "Rock", "Hip-hop", "Jazz"],
    correct_answer: "Pop",
  },
  {
    id: "74",
    question: "Ποια είναι η πρωτεύουσα της Αιθιοπίας;",
    options: ["Αδίσ Αμπέμπα", "Λαγκός", "Κάιρο", "Ναϊρόμπι"],
    correct_answer: "Αδίσ Αμπέμπα",
  },
  {
    id: "75",
    question: "Ποιο είναι το πιο δημοφιλές αθλημα στην Αμερική;",
    options: ["Ποδόσφαιρο", "Μπάσκετ", "Χόκεϊ", "Αμερικάνικο ποδόσφαιρο"],
    correct_answer: "Αμερικάνικο ποδόσφαιρο",
  },
  {
    id: "76",
    question: "Ποιο είναι το πιο δημοφιλές πρόγραμμα υπολογιστών;",
    options: ["Windows", "MacOS", "Linux", "Unix"],
    correct_answer: "Windows",
  },
  {
    id: "77",
    question: "Ποια είναι η πιο συνηθισμένη ασθένεια του αναπνευστικού;",
    options: ["Άσθμα", "Χρόνια βρογχίτιδα", "Πνευμονία", "Φυματίωση"],
    correct_answer: "Άσθμα",
  },
  {
    id: "78",
    question: "Ποια είναι η μεγαλύτερη οργάνωση στον κόσμο;",
    options: ["ΟΗΕ", "ΝΑΤΟ", "ΕΕ", "Παγκόσμιος Οργανισμός Υγείας"],
    correct_answer: "ΟΗΕ",
  },
  {
    id: "79",
    question: "Ποια είναι η πιο διάσημη αθλητική διοργάνωση στον κόσμο;",
    options: [
      "Ολυμπιακοί Αγώνες",
      "Παγκόσμιο Κύπελλο",
      "Σούπερ Μπολ",
      "Γκραντ Σλαμ",
    ],
    correct_answer: "Ολυμπιακοί Αγώνες",
  },
  {
    id: "80",
    question: "Ποιο είναι το πιο διάσημο φεστιβάλ στον κόσμο;",
    options: ["Carnival", "Oktoberfest", "Diwali", "Holi"],
    correct_answer: "Carnival",
  },
  {
    id: "81",
    question: "Ποια είναι η πιο παλιά χώρα στον κόσμο;",
    options: ["Αίγυπτος", "Κίνα", "Ελλάδα", "Ρώμη"],
    correct_answer: "Κίνα",
  },
  {
    id: "82",
    question: "Ποιο είναι το πιο κοινό φυσικό φαινόμενο;",
    options: ["Καταιγίδα", "Χιόνι", "Βροχή", "Άνεμος"],
    correct_answer: "Βροχή",
  },
  {
    id: "83",
    question: "Ποιο είναι το πιο σπάνιο μέταλλο;",
    options: ["Χρυσός", "Άργυρος", "Πλατίνα", "Αλουμίνιο"],
    correct_answer: "Πλατίνα",
  },
  {
    id: "84",
    question: "Ποια είναι η πιο διάσημη μηχανή αναζήτησης;",
    options: ["Google", "Bing", "Yahoo", "DuckDuckGo"],
    correct_answer: "Google",
  },
  {
    id: "85",
    question: "Ποια είναι η πιο αναγνωρίσιμη εταιρεία στον κόσμο;",
    options: ["Apple", "Microsoft", "Google", "Amazon"],
    correct_answer: "Apple",
  },
  {
    id: "86",
    question: "Ποιο είναι το πιο δημοφιλές παιχνίδι στον κόσμο;",
    options: ["Παγκόσμιο Κύπελλο", "Fortnite", "Minecraft", "Call of Duty"],
    correct_answer: "Minecraft",
  },
  {
    id: "87",
    question: "Ποια είναι η πιο δημοφιλής γλώσσα προγραμματισμού;",
    options: ["JavaScript", "Python", "Java", "C++"],
    correct_answer: "JavaScript",
  },
  {
    id: "88",
    question: "Ποιο είναι το πιο διαδεδομένο μέσο κοινωνικής δικτύωσης;",
    options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    correct_answer: "Facebook",
  },
  {
    id: "89",
    question: "Ποιο είναι το πιο δημοφιλές οπτικό μέσο;",
    options: ["Τηλεόραση", "Κινηματογράφος", "Webinar", "YouTube"],
    correct_answer: "YouTube",
  },
  {
    id: "90",
    question: "Ποια είναι η πιο δημοφιλής εφαρμογή για κινητά;",
    options: ["WhatsApp", "Facebook", "Instagram", "Snapchat"],
    correct_answer: "WhatsApp",
  },
  {
    id: "91",
    question: "Ποια είναι η πιο διάσημη σειρά κινουμένων σχεδίων;",
    options: ["The Simpsons", "SpongeBob", "Adventure Time", "Avatar"],
    correct_answer: "The Simpsons",
  },
  {
    id: "92",
    question: "Ποιο είναι το πιο δημοφιλές αθλημα στην Αφρική;",
    options: ["Ποδόσφαιρο", "Ράγκμπι", "Μπάσκετ", "Κρίκετ"],
    correct_answer: "Ποδόσφαιρο",
  },
  {
    id: "93",
    question: "Ποια είναι η πιο διάσημη ταινία κινουμένων σχεδίων;",
    options: ["Toy Story", "Finding Nemo", "Frozen", "The Lion King"],
    correct_answer: "The Lion King",
  },
  {
    id: "94",
    question: "Ποια είναι η πιο αναγνωρίσιμη φράση από ταινία;",
    options: [
      "May the Force be with you",
      "I'll be back",
      "Here's looking at you, kid",
      "Houston, we have a problem",
    ],
    correct_answer: "I'll be back",
  },
  {
    id: "95",
    question: "Ποια είναι η πιο δημοφιλής τηλεοπτική σειρά;",
    options: ["Game of Thrones", "Breaking Bad", "Friends", "The Office"],
    correct_answer: "Game of Thrones",
  },
  {
    id: "96",
    question: "Ποια είναι η πιο αναγνωρίσιμη ιστορία κόμικς;",
    options: ["Batman", "Superman", "Spider-Man", "Wonder Woman"],
    correct_answer: "Batman",
  },
  {
    id: "97",
    question: "Ποιο είναι το πιο διάσημο παιχνίδι για κινητά;",
    options: ["Candy Crush", "Angry Birds", "Clash of Clans", "Among Us"],
    correct_answer: "Candy Crush",
  },
  {
    id: "98",
    question: "Ποια είναι η πιο αναγνωρίσιμη φωνή;",
    options: ["Mickey Mouse", "Donald Duck", "Homer Simpson", "SpongeBob"],
    correct_answer: "Mickey Mouse",
  },
  {
    id: "99",
    question: "Ποιο είναι το πιο διάσημο ρομπότ;",
    options: ["R2-D2", "C-3PO", "Wall-E", "Optimus Prime"],
    correct_answer: "R2-D2",
  },
  {
    id: "100",
    question: "Ποιο είναι το πιο δημοφιλές αναψυκτικό στον κόσμο;",
    options: ["Coca-Cola", "Pepsi", "Sprite", "Fanta"],
    correct_answer: "Coca-Cola",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Backend for quiz game GR</h1>");
});

app.get("/api/generalQuestions", (request, response) => {
  response.json(generalQuestions);
});

app.get("/api/generalQuestions/:id", (request, response) => {
  const id = request.params.id;
  const generalQuestion = generalQuestions.find(
    (question) => question.id === id
  );
  if (generalQuestion) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
