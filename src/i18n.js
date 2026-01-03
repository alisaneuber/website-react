import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            //{t("description.part2")}
            //header
            header_left: "Coding with Purpose",
            header_home: "HOME",
            header_portfolio: "PORTFOLIO",
            header_aboutme: "ABOUT ME",
            header_contact: "CONTACT",
            header_enImg_alt: "English Language",
            header_deImg_alt: "German Language",
            //footer
            footer_link: "SCROLL TO TOP",
            //home
            home_header: "Alisa Neuber - Game Development and Programming",
            home_subtitle: "I'm a programmer with a love for creative problem solving and advocating for accessibility in all Industries.",
            home_text1: "Growing up in a small town in central Germany, my love for programming and my fascination with creating my own digital experiences shone through early. I moved to Leipzig to expand my knowledge of computer science. I studied computer science at the 'Leipzig University of Applied Sciences' beginning in 2021 and graduated in May 2025 with a Bachelor in Science. During my studies I explored different aspects of programming and computer science and found a love in the fundamental and practical. Finding ways to transform a design idea into functioning code is such a wonderful way to flex creative and logical muscles. Combining my new found passion of coding with an older interest of mine, gaming, seemed only logical. Alongside diving deeper into computer science I also tried to learn more about game design and game development. It is absolutely amazing seeing rudimentary ideas be refined and transformed into complex systems. This is why in my further work I have focused on game development.",
            home_img1_alt: "A polaroid picture of Alisa Neuber smiling and showing a peace sign to the camera",
            home_text2: "During my studies I had the opportunity to create smaller game prototypes here and there, but I finally had the chance to dedicate my full attention to game development during my final project for my bachelor. The project spanned a full mobile prototype of a blind inclusive game. In working together with a development studio in Leipzig, Inclusive Gaming GmbH, I gained experience in Unity development as well as working on Android experiences. Additionally, during this work I broadened my perspective on Accessibility in gaming.",
            home_img2_alt: "A screenshot of a scene in unity, showcasing a white plane with objects and green floating balls",
            home_text3: "In reaction to my Deep Dive into Gaming Accessibility during my research and my work I have become very passionate about the topic. It was harrowing to see the barriers still present in modern gaming. But in this examination I also discovered many creative and inspiring solutions for creating features to help all sorts of players have an inclusive and fun experience. I think the future of gaming and game development overall still needs to strive for more accessibility. In this I hope to be a positive voice on every project I work on, advocating for breaking down barriers and creating more expansive accessibility features.",
            home_img3_alt: "Two pictures of a phone with a numpad, with the screen showing the start screen and a level of the game 'Dinonid'",
            //portfolio
            portfolio_header: "Portfolio",
            portfolio_era1_header: "My University Projects",
            portfolio_article1_header: "News Display Website (React)",
            portfolio_article1_text: "I collaborated with a team of both computer science bachelor's and master's students to develop an internal web application for the consulting agency 'mmmake'. The application delivers and displays scheduled news slideshows on company displays via a Microsoft Outlook-based interface. I contributed to the development of the React-based frontend and gained practical experience with agile development, including Scrum, throughout the project.",
            portfolio_article1_img_alt: "Picture of a vertical display, which shows a slideshow",
            portfolio_article2_header: "Educational Game About Forest Animals (Unity VR)",
            portfolio_article2_text: "I developed a VR learning application for Meta Quest as part of a three-person team. The application introduces children to the animals of the German forest through interactive exploration and mini-games. I was responsible for designing and implementing the virtual environment and interactive elements in VR.",
            portfolio_article2_img_alt: "Screenshot of a VR game set in a forest clearing with a pond. There are small games and puzzles set up to interact with",
            portfolio_article3_header: "Blind-inclusive Ghost Hunting Game (Unity 3D)",
            portfolio_article3_text: "I developed a mobile game for blind and visually impaired users as part of a bachelor's thesis, focusing on auditory navigation and gyroscopic controls to explore a virtual environment and locate in-game elements. The project involved in-depth research into accessibility and inclusive game design practices. The game was designed to be fully accessible to blind and visually impaired players alike. User testing and a case study was conducted in collaboration with Inclusive Gaming GmbH, involving both blind and sighted participants.",
            portfolio_article3_img_alt: "Picture of a game prototype. The game prototype shows a white plane with object placed on it. There are green objects floating through the air. The player is placed in the centre of the plane",
            portfolio_era2_header: "My Work With Inclusive Gaming GmbH",
            portfolio_era2_img_alt: "Icon of the logo of Inclusive Gaming",
            portfolio_article4_header: "Dinonid Port For Android & Blindshell-Phones (Unity 2D)",
            portfolio_article4_text: "I managed the porting of 'Dinonid', a blind-inclusive puzzle game, as part of my work with Inclusive Gaming. The focus lay on Android development and accessible touch-based interaction design for visually impaired users. I developed custom solutions to ensure both input and output were fully usable by both sighted and blind players. Additionally, I created a dedicated port for the Blindshell phone, a dedicated assistive technology for blind people utilizing screen reader technology, which now is delivered pre-installed on all devices.",
            portfolio_article4_img_alt: "Two pictures of a red Blindshell accessibility phone. The phone resembles and older model of phone with a twelve button numberpad. On its display the game 'Dinonid' is being shown",
            portfolio_article5_header: "Zoochaos Prototype (Unity 2D)",
            portfolio_article5_text: "I contributed to the development of 'Zoochaos', a current game project by Inclusive Gaming, by creating and iterating on multiple gameplay prototypes. I translated diverse game design concepts into functional gameplay slices in a structured and efficient manner. Afterwards I consolidated selected prototypes into a unified project, forming the basis of the current stage of development.",
            portfolio_article5_img_alt: "Picture of a 2D rhythm game. The picture shows a five lane stage with aproaching projectiles. The player character is at the bottom of the screen. The enemy and the healthbar is at the top",
            portfolio_article6_header: "Continuation Of Ghost Hunting Game For Full Release (Unity 3D)",
            portfolio_article6_text: "Ongoing development of a mobile game in collaboration with Inclusive Gaming, based on a previously created prototype. The project aims to create a shared experience for blind and sighted players by building a bridge between sighted and auditory gaming experiences. Planned features include multiple levels, an expanded audio environment, and the addition of a graphical user interface.",
            portfolio_article6_img_alt: "Picture of a game prototype. It shows a top down view of a corner hallway with several doors",
            //aboutme
            aboutme_header: "Learn More About Me",
            aboutme_subheader1: "Who I Am",
            aboutme_text1: "I'm a programmer with an interest in Game Development and Game Engineering. My passion is coding and finding innovative solutions for feature implementation. I also advocate for accessibility in Gaming and Game Development. In my pursuit of knowledge in the field of Computer Science I have acquired a Bachelor of Science at the 'Leipzig University of Applied Sciences'.",
            aboutme_text2: "During my studies I have gained experience with Development in C/C#/C++ as well as Java. I have also worked on web-based projects utilizing React. Thanks to my final project and additional work in the field I have become proficient in Unity Development (2D, 3D, VR). My previous work has helped me develop structured approaches to programming and the implementation of complex systems.",
            aboutme_text3: "I speak German and English fluently (C2) and am currently learning Portuguese (A1).",
            aboutme_subheader2: "What I Like To Spend My Time On",
            aboutme_card1: "I love birdwatching! As many other birders can agree with it started with me stepping outside on a random day and all at once noticing all the life around me. I decided to learn more about all the bird sounds I kept hearing on my walks and fell in love with identifying birds. I might not be that great at identifying birds by sound yet, but I've gotten better at sketching them.",
            aboutme_card1_img_alt: "A Pinboard with different pictures pinned to it. Left to right there is a picture of a gray heron, a drawing of a wood pidgeon, a drawing of a Chestnut-bellied seed finch, a drawing and a picture of mallards, an embroidered patch of a wood pidgeon and a linoprint of a duck",
            aboutme_card2: "Do you like stabbing something over and over until it becomes art? I do! I've been sewing since I was a teen and alongside it I started embroidery to let me be more creative. As with most of my art I love smushing together different mediums and have found my home in a niche I'd like to call Embroidered Canvas. I also embroider on clothes and create my own patches. Recently I've set myself the challenge of creating a plushie for my niece to see how haptically interesting (and baby-proof) I can make my creations.",
            aboutme_card2_img_alt: "A Pinboard with different pictures pinned to it. Left to right there are two pictures of a jacket with embroidered patches sewn on, a picture of a starry canvas with fabric guts spilling out, a picture of a shirt with a sewn pighead infront of a red spiral, a picture of a mothman plushie, and a picture of a plush creature with a large yellow head and tentacles",
            aboutme_card3: "I like traditional art styles (like painting on canvas or linoprint), because I love being able to hold whatever I have created in my hands and having things to hang in my room. My art usually reflects whatever I'm a fan of at the moment but occasionally I just have fun following an idea to its creative conclusion. I love mixing different art mediums and seeing what results I can achieve. ",
            aboutme_card3_img_alt: "A Pinboard with different pictures pinned to it. Left to right there are three linoprints depicting versions of a scene with different colors, a stencil for retro dinosaur, a painting of a cowboy in the desert, two pictures of the front and back of a hanging canvas depicting a different character on each side, a painting of the poem 'The Kitten' by Marie Oliver and a stencil for a torch symbol",
            aboutme_card4: "While I wouldn't say I'm a particularly sporty person, I have found joy in boxing. I love the thrill of punch and evade or the strategic approaches to a fight. Boxing has made me realize that not every sport has to be awful and draining, but that the right fit can help rejuvenate you after a long day. As a less serious activity I have also picked up juggling. It's fun making those colorful balls fly through the air and trying out all sorts of different patterns. For me it's still more about picking up the balls rather than catching them, but I think there is some fun in that too.",
            aboutme_card4_img_alt: "A Pinboard with different pictures pinned to it. Left to right there is a picture of boxing gloves and a picture of juggling balls",
            //contact
            contact_header: "Contact Me",
            contact_subtitle: "You can find my work and reach me through these channels: ",
            contact_subtitle2: "I would be happy to hear from you.",
          }
        }
      },
      de: {
        translation: {
          description: {
            //header
            header_left: "Programmieren mit Sinn",
            header_home: "STARTSEITE",
            header_portfolio: "PORTFOLIO",
            header_aboutme: "ÜBER",
            header_contact: "KONTAKT",
            header_enImg_alt: "Englische Sprache",
            header_deImg_alt: "Deutsche Sprache",
            //footer
            footer_link: "NACH OBEN SCROLLEN",
            //home
            home_header: "Alisa Neuber - Game Development und Programmierung",
            home_subtitle: "Ich bin ein Programmierer mit einer Passion für kreative Problemlösung und ich setze mich für mehr Barrierefreiheit in allen Branchen ein.",
            home_text1: "Ich bin in einer Kleinstadt in Thüringen aufgewachsen und habe früh meine Liebe für Programmierung und das Erstellen von einzigartigen digitalen Erlebnissen entdeckt.  Ich bin nach Leipzig gezogen um mein Wissen über Informatik und Computerwissenschaft zu erweitern. Ich habe ab 2021 Informatik an der 'Hochschule für Technik, Wirtschaft und Kultur Leipzig' studiert und bin im Mai 2025 mit einem Bachelor of Science graduiert. Während meines Studiums habe ich mich verschiedenen Aspekten der Programmierung gewidmet und Interesse am praktischen Teil der Computerwissenschaft gefunden. Wege zu finden um Design Ideen zu funktionierendem Code zu transformieren ist meiner Meinung nach eine wundervolle Art kreatives und logisches Denken zu trainieren. Meine Leidenschaft für das Programmieren mit meinem älteren Interesse an Videospielen zu verbinden, erschien mir nur logisch. Deswegen habe ich neben der Vertiefung meiner Informatikkenntnisse auch versucht, mehr über Spieledesign und Spieleentwicklung zu lernen. Es ist beeindruckend zu sehen, wie rudimentäre Ideen zu komplexen und weitreichenden Systemen weiterentwickelt werden, und ich habe mich in meiner weiteren Laufbahn auf Spieleentwicklung fokussiert.",
            home_img1_alt: "Ein Polaroidbild von Alisa Neuber. Sie schaut in die Kamera und hält mit ihrer Hand ein Peace-Zeichen hoch.",
            home_text2: "Während meines Studiums hatte ich die Chance an mehreren kleinen Spielprototypen zu arbeiten aber ich hatte mit meinem Bachelorprojekt endlich die Möglichkeit meine gesamte Aufmerksamkeit einer Spieleidee zu widmen. Das Projekt umfasste einen vollständigen Prototyp eines blindenfreundlichen Handyspiels. Dank meiner Zusammenarbeit mit dem Leipziger Entwicklerstudio Inclusive Gaming GmbH habe ich Erfahrungen mit Unity und Android Entwicklung gesammelt. Des Weiteren habe ich während meiner Zeit dort meine Perspektive von Barrierefreiheit in Gaming erweitert.",
            home_img2_alt: "Ein Screenshot einer Szene in Unity, welcher eine weiße Ebene mit Objekten und grünen schwebenden Kugeln zeigt.",
            home_text3: "Aus meiner tiefgründigen Recherche über Inklusion in Game Development hat sich eine Leidenschaft für Barrierefreiheit in Gaming gebildet. Es war erst schockierend zu sehen, wo in modernen Spielen überall Barrieren auftauchen, aber in meiner Untersuchung habe ich auch viele kreative und inspirierende Lösungen für Inklusionsfeatures gefunden. Diese können helfen, allen Spielern die Möglichkeit eines barrierefreien und spaßigen Erlebnisses zu bieten. Ich hoffe in jedem zukünftigen Projekt eine positive Stimme zu sein, welche sich für das Abbauen von Barrieren und das Kreieren von ausführlichen Inklusionsfeatures einsetzt.",
            home_img3_alt: "Zwei Bilder eines Tastenhandys. Auf dem Display ist der Startbildschirm und ein Level des Spiels 'Dinonid' zu sehen",
            //portfolio
            portfolio_header: "Portfolio",
            portfolio_era1_header: "Meine Universitätsprojekte",
            portfolio_article1_header: "Nachrichten Display Webseite (React)",
            portfolio_article1_text: "Ich habe in Kollaboration mit einer Gruppe von Bachelor und Masterstudenten eine interne Webanwendung für die Beratungsagentur 'mmmake' erstellt. Die Applikation zeigt Slideshows mit Nachrichten auf firmeneigenen Displays via einem Microsoft Outlook basierten Interface. Spezifisch habe ich an dem React Frontend gearbeitet und habe während des Projektes praktische Erfahrung mit Agile Development und Scrum gesammelt.",
            portfolio_article1_img_alt: "Bild eines vertikalen Displays, das eine Diashow zeigt",
            portfolio_article2_header: "Lernspiel über die Tiere das Waldes (Unity VR)",
            portfolio_article2_text: "Ich habe eine VR-Lernanwendung für die Meta Quest als Teil eines dreiköpfigen Teams entwickelt. Die Anwendung bringt Kindern die Tiere des deutschen Waldes durch interaktive Erkundung und Spiele näher. Ich war verantwortlich für das Design und die Implementierung des virtuellen Raumes und die interaktiven Elemente in VR.",
            portfolio_article2_img_alt: "Screenshot eines VR-Spiels, das in einer Waldlichtung mit einem Teich spielt. Es gibt kleine Spiele und Rätsel, mit denen man interagieren kann",
            portfolio_article3_header: "Blindeninklusives Geisterjagd Spiel (Unity 3D)",
            portfolio_article3_text: "Als Teil meiner Bachelorarbeit habe ich ein Handyspiel für blinde und sehbehinderte Nutzer entwickelt. Mein Fokus lag auf auditiver Navigation und Gyroskop-Kontrolle als Mittel zur Erkundung eines virtuellen Raumes und Lokalisation von Spielelementen. Das Project beinhaltete tiefgründige Recherche über Barrierefreiheit und inklusives Game Design. Das Spiel wurde so designet, dass es vollkommen spielbar für blinde und sehbehinderte Spieler ist. Es wurden Nutzertests und eine Fallstudie, mit sowohl blinden als auch sehenden Teilnehmern, in Zusammenarbeit mit Inclusive Gaming GmbH durchgeführt.",
            portfolio_article3_img_alt: "Bild eines Spielprototyps. Der Spielprototyp zeigt eine weiße Ebene mit darauf platzierten Objekten. Es schweben grüne Objekte durch die Luft. Der Spieler befindet sich in der Mitte der Ebene",
            portfolio_era2_header: "Meine Arbeit mit Inclusive Gaming GmbH",
            portfolio_era2_img_alt: "Icon des Logos von Inclusive Gaming",
            portfolio_article4_header: "Dinonid Portierung für Android & Blindshell-Handys (Unity 2D)",
            portfolio_article4_text: "Ich habe mich um die Portierung des blindeninklusiven Puzzelspiels 'Dinonid' gekümmert. Dies umfasste zwei mobile Ports für Android, mit einem Fokus auf dem barrierefreien Touch-Interaktions-System für sehbehinderte Nutzer. Ich habe maßgeschneiderte Lösungen entwickelt, um sicherzustellen, dass sowohl die Eingabe als auch die Ausgabe für sehende und blinde Spieler vollständig nutzbar sind. Außerdem habe ich eine spezifische Portierung für das Blindshell Handy, ein assistives Gerät für blinde Menschen mit Screenreader-Technologie, erstellt. Diese Portierung des Spieles wird jetzt vorinstalliert mit jedem verkauften Gerät geliefert.",
            portfolio_article4_img_alt: "Zwei Bilder eines roten Blindshell-Barrierefreiheitstelefons. Das Telefon ähnelt einem älteren Handymodell mit einer Tastatur mit zwölf Tasten. Auf dem Display wird das Spiel „Dinonid“ angezeigt",
            portfolio_article5_header: "Zoochaos Prototyp (Unity 2D)",
            portfolio_article5_text: "Ich habe an der Entwicklung des aktuellen Spieleprojekts 'Zoochaos' von Inclusive Gaming gearbeitet. Teil meiner Aufgaben war das kreieren und iterieren verschiedener Spielprototypen. Ich habe strukturiert und effizient verschiedene Game Design Konzepte zu funktionalen Gameplay-Slices umgewandelt. Danach habe ich mehrere dieser Prototypen zu einem einheitlichen Projekt zusammengefasst, welches die Grundlage für die aktuelle Entwicklungsphase bildet.",
            portfolio_article5_img_alt: "Bild eines 2D-Rhythmusspiels. Das Bild zeigt eine fünfspurige Bühne mit herannahenden Projektilen. Die Spielfigur befindet sich am unteren Bildschirmrand. Der Gegner und die Gesundheitsanzeige befinden sich oben",
            portfolio_article6_header: "Weiterentwicklung des Geisterjagd Spiel (Unity 3D)",
            portfolio_article6_text: "Fortlaufende Entwicklung eines Handyspiels in Zusammenarbeit mit Inclusive Gaming, basierend auf einem zuvor erstellten Prototyp. Das Projekt hat das Ziel, eine gemeinsame Erfahrung für blinde und sehende Spieler zu schaffen, indem eine Brücke zwischen visuellen und auditiven Spielerlebnissen geschaffen wird. Zu den geplanten Funktionen gehören mehrere Levels, eine erweiterte Audio-Umgebung und die Hinzufügung einer grafischen Benutzeroberfläche.",
            portfolio_article6_img_alt: "Bild eines Spielprototyps. Es zeigt eine Draufsicht auf einen Eckflur mit mehreren Türen",
            //aboutme
            aboutme_header: "Mehr Über Mich",
            aboutme_subheader1: "Wer Ich Bin",
            aboutme_text1: "Ich bin ein Programmierer mit Interesse an Game Development und Game Engineering. Meine Leidenschaft gilt dem Programmieren und der Suche nach innovativen Lösungen für die Funktionenimplementierung. Außerdem setze ich mich für Barrierefreiheit in Spielen und der Spieleentwicklung ein. In meinem Streben nach Wissen im Bereich Informatik habe ich einen Bachelor of Science an der 'Hochschule für Technik, Wirtschaft und Kultur Leipzig' erworben.",
            aboutme_text2: "Während meines Studiums habe ich sowohl Erfahrungen mit Entwicklung in C/C#/C++ als auch Java gesammelt. Ich habe außerdem an webbasierten Projekten, welche React nutzen, gearbeitet. Dank meines finalen Projektes und weiterer Arbeit im Bereich habe ich weitreichende Kompetenzen in Unity Development (2D, 3D, VR) erworben. Meine bisherige Arbeit hat mir dabei geholfen, strukturierte Ansätze für die Programmierung und Implementierung komplexer Systeme zu entwickeln.",
            aboutme_text3: "Ich spreche Deutsch und Englisch fliesend (C2) und lerne des Weiteren zurzeit Portugiesisch (A1).",
            aboutme_subheader2: "Mit Was Ich Gerne Meine Zeit Verbringe",
            aboutme_card1: "Ich liebe Vogelbeobachtung! Wie viele andere Birder auch, begann alles damit, dass ich an einem ganz normalen Tag nach draußen ging und plötzlich all das Leben um mich herum bemerkt habe. Ich beschloss, mehr über die Vogelstimmen zu erfahren die ich auf meinen Spaziergängen immer wieder hörte, und verliebte mich in die Vogelbestimmung. Ich bin vielleicht noch nicht so gut darin, Vögel anhand ihrer Stimmen zu bestimmen, aber ich bin besser darin geworden, sie zu skizzieren.",
            aboutme_card1_img_alt: "Eine Pinnwand mit verschiedenen Bildern. Von links nach rechts sieht man ein Bild eines Graureihers, eine Zeichnung einer Ringeltaube, eine Zeichnung einer Braunbauchspelze, eine Zeichnung und ein Bild von Stockenten, einen gestickten Aufnäher einer Ringeltaube und einen Linoldruck einer Ente.",
            aboutme_card2: "Magst du es, ein Objekt wiederholt zu erstechen, bis es zu Kunst wird? Ich schon! Ich nähe seit meiner Jugend und habe nebenbei mit Sticken angefangen, um meiner Kreativität freien Lauf zu lassen. Wie bei den meisten meiner Kunstwerke liebe ich es, verschiedene Medien miteinander zu kombinieren, und habe mir eine Nische gefunden, die ich gerne als „bestickte Leinwand” bezeichne. Ich sticke auch auf Kleidung und entwerfe meine eigenen Aufnäher. Vor kurzem habe ich mir die Herausforderung gestellt, ein Plüschtier für meine Nichte zu entwerfen, um zu sehen, wie haptisch interessant (und babysicher) ich meine Kreationen gestalten kann.",
            aboutme_card2_img_alt: "Eine Pinnwand mit verschiedenen Bildern. Von links nach rechts sieht man zwei Bilder einer Jacke mit bestickten Aufnäher, ein Bild einer sternenübersäten Leinwand aus der Stoffinnereien herausragen, ein Bild eines T-shirt mit einem aufgenähten Schweinekopf vor einer roten Spirale, ein Bild eines Mothman-Plüschtiers und ein Bild eines Plüschtiers mit einem großen gelben Kopf und Tentakeln",
            aboutme_card3: "Ich mag traditionelle Kunst Arten (wie Malerei auf Leinwand oder Linolschnitt), weil ich es liebe meine eigenen Kreationen in den Händen zu halten und Dinge in meinem Zimmer aufzuhängen. Meine Kunst spiegelt normalerweise wider, wovon ich gerade begeistert bin, aber manchmal habe ich auch einfach nur Spaß daran, eine Idee bis zu ihrem kreativen Ende zu verfolgen. Ich liebe es, verschiedene Kunstmedien zu mischen und zu sehen, welche Ergebnisse ich damit erzielen kann.",
            aboutme_card3_img_alt: "Eine Pinnwand mit verschiedenen Bildern. Von links nach rechts sind drei Linolschnitte zu sehen die Varianten einer Szene in verschiedenen Farben darstellen, eine Schablone für einen Retro-Dinosaurier, ein Gemälde eines Cowboys in der Wüste, zwei Bilder der Vorder- und Rückseite einer hängenden Leinwand auf denen jeweils eine andere Figur zu sehen ist, ein Gemälde des Gedichts „The Kitten” von Marie Oliver und eine Schablone für ein Fackelsymbol.",
            aboutme_card4: "Ich würde mich zwar nicht als besonders sportlich bezeichnen, aber ich habe Freude am Boxen gefunden. Ich liebe den Nervenkitzel beim Schlagen und Ausweichen oder die strategischen Ansätze eines Kampfes. Durch das Boxen habe ich erkannt, dass nicht jede Sportart schrecklich und anstrengend sein muss, sondern dass die richtige Sportart einem helfen kann, sich nach einem langen Tag zu erholen. Als weniger ernsthafte Aktivität habe ich auch das Jonglieren für mich entdeckt. Es macht Spaß, diese bunten Bälle durch die Luft fliegen zu lassen und alle möglichen Muster auszuprobieren. Bei mir geht es immer noch mehr darum, die Bälle aufzuheben als sie zu fangen, aber ich finde das hat auch seinen Reiz.",
            aboutme_card4_img_alt: "Eine Pinnwand mit verschiedenen Bildern. Von links nach rechts sieht man ein Bild von Boxhandschuhen und ein Bild von Jonglierbällen",
            //contact
            contact_header: "Kontaktieren Sie Mich",
            contact_subtitle: "Sie können hier meine Projekte finden und mich über folgende Kanäle erreichen: ",
            contact_subtitle2: "Ich würde mich freuen, von Ihnen zu hören.",
          }
        }
      }
    }
  });

export default i18n;