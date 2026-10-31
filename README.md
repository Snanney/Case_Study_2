Step 1: Interaction Mechanics & Input Paradigm Mapping

	User Flow Selection:
		Registering for new classes with Weber State using eWeber.
	Input Mechanics Analysis:
		
Flow Step	Touch	Pointing Device	Keyboard	Voice/Screen-reader
Login Page: Enter username	Tap field to focus, on-screen keyboard opens	Click field to focus	Tab until field is selected, then type directly in	Label “Username” should be announced on focus; voice control: “Click username”
Login Page: Enter Password	Tap field to focus, on-screen keyboard opens	Click password field to focus	Tab until password field is selected, then type in, then hit enter	Label “Password” should be announced on focus;
Voice control: “Click Password”
eWeber Search (search for Register for Classes)	Tap on search bar in eWeber tools area	Click the search bar in the eWeber tools area	Tab until the search bar in the eWeber tools area is selected	Label
“eWeber Search” should be announced on focus; Voice Control “Click eWeber Search
eWeber Tools: Select Register for Classes (Add/Drop)	Tap on card that has Register for Classes (Add/Drop)	Click card that reads Register for Classes (Add/Drop)	Tab until card that reads Register for Classes (Add/Drop) is highlighted and select	Label “Register for Classes (Add/Drop)” is announced on focus; voice control “Click Register for Classes (Add/Drop)”
Register for Classes sub-menu, choosing register for classes	Tap on text that reads “Register for classes”	Click text that reads “Register for classes”	Tab until text that reads “Register for classes” is selected	Label “Register for Classes” is announced on focus; voice control: “Click Register for classes”
Search for Class (many ways to do so but we will do it from the course number perspective)	Tap on the bar next to Course Number, on-screen keyboard appears	Click box next to Course Number, input with onscreen keyboard or physical keyboard	Tab until box next to Course Number is selected. Then input with keys	Label “Couse Number Input” is announced on focus; voice control: “Click course Number Input” then say what the course number is you are looking for
Search Button	Tap on the search button	Click the Search button	Tab until search button is selected and then press enter to activate	Label “Search” is announced on focus; voice control “Click Search”
Add class to your schedule	Tap on add button	Click on add button	Tab until add button on the class you want is select then press enter	Label “Add” will be read after you hear all the meeting time and course titles you want; voice control “Click Add”
Choose your meeting time/online	Tap the selection you want	Click the selection you want	Tab until you can check mark the selection you want	Voice control: “Click [the meeting time you want]”
Submit	Tap the Submit button	Click the submit button	Tab until the submit button is selected then press enter	Label “Submit” will be read; voice control “Click submit”

	Fitt’s Law Target Sizing (>= 44x44px or 48x48px):
		Note: Done on mobile to get possible mobile related edge cases.
Element	Dimensions	Pass/Fail (Dimensions)	Space to nearest Neighbor	Pass/Fail
(Spacing)
Login Button	308x36px	Fail	74px	Pass
Need your Wildcat Username Link	213x56px	Pass	34px	Pass
Forgot Your Password Link	162x19px	Fail	42px	Pass
Password Self Service Link	158x19px	Fail	36px	Pass
Log in to get a DUO Bypass Code Link	233x19px	Fail	36px	Pass
IT Desk Number Button	308x38px	Fail	18px	Pass
IT Service Chat Button	308x38px	Fail	18px	Pass
Register for Classes (Add/Drop) Link	227x20px	Fail	9px	Pass
Agree Button	210x37px	Fail	10px	Pass
Prepare for Registration Link	340x58px	Pass	25px	Pass
Register for Classes	340x58px	Pass	25px	Pass
Plan Ahead	340x58px	Pass	25px	Pass
Search Class Schedule	340x58px	Pass	25px	Pass
Student Course Schedule	340px58px	Pass	25px	Pass
Browse Course Catalog	340x58px	Pass	25px	Pass
Term Bubble	13x20px	Fail	52px	Pass
Date Range Bubble	13x20px	Fail	52px	Pass
Select a Term Drop down	300x28px	Fail	59px	Pass
Continue Button	98x28px	Fail	10px	Pass
Search Button in Course Search	88x28px	Fail	59px	Pass

Step 2: High-Fidelity Prototyping & Micro-Interaction Design

Building interactive prototype in Figma
Document explicit visual and programmatic states for every interactive component across the flow:
	Done with semantic front-end code

State Transition Definitions
login.html
Component	Visual states	Programmatic states
Wildcat Username field, Password field (text inputs)	Default: 56px box, grey border, label inside the box. Hover: border darkens. Focus: 3px blue ring, label floats up. Active: label stays raised while typing. Disabled: grey fill with a written reason (not used). Loading: field is read-only while sending. Error: red border and label, red message under the field.	Native input with a label tied by for and id. autocomplete=username or current-password. Error: aria-invalid=true, aria-describedby pointing to the message, focus moves to the first invalid field, message clears when a value is typed. Loading: aria-busy=true on the form. Disabled: aria-disabled=true plus aria-describedby.
Login (button)	Default: purple #46286a fill, white bold text, 44px tall, full width. Hover: darker #331d4f. Focus: 3px blue ring. Active: darkest fill with inset shadow. Disabled: n/a. Loading: label reads Logging in… with a spinner, same width. Error: n/a (the errors show on the fields and the button stays enabled).	button type=submit inside a form with novalidate. :hover, :focus-visible, :active. Loading: aria-busy=true, role=status message, repeat clicks ignored.
Need your Wildcat Username?, Forgot your password?, Password Self Service, Log in to get a DUO Bypass Code (text links)	Default: purple #46286a, underlined, 44px tall click area. Hover: darker #331d4f. Focus: 3px blue ring. Active: darkest color. Disabled, Loading, Error: n/a.	a with href=# (placeholder). Link text names the destination. :hover, :focus-visible, :active.
801-626-7777, IT Service Chat (button-style links)	Default: purple fill, white bold text, 44px tall, full width. Hover: darker #331d4f. Focus: 3px blue ring. Active: darkest fill. Disabled, Loading, Error: n/a.	a with href. The phone number uses tel:8016267777. Chat uses href=#. :hover, :focus-visible, :active.
home.html
Component	Visual states	Programmatic states
Skip to main content (skip link, also on eWeber and the Banner pages)	Default: hidden above the page. Hover: n/a. Focus: moves into view at top left, white box, bold purple text, 3px ring. Active: n/a. Disabled, Loading, Error: n/a.	a with href=#main, first focusable element. Moves focus to the main landmark.
A-Z Index, Calendar, Canvas, Employee Directory, Maps, Online Degrees (utility links)	Default: white text on purple, 44px tall. Hover: underline. Focus: 3px white ring. Active: slightly darker bar. Disabled, Loading, Error: n/a.	a inside nav aria-label=Quick links. href=# placeholders. :hover, :focus-visible, :active.
Info for, Weather Status (utility links with a caret)	Same as the utility links. The caret is a small white triangle. Expanded: n/a (no menu yet).	Same as the utility links. The caret has aria-hidden=true. No aria-expanded until a menu exists.
Messages, Search (icon-only links)	Default: white icon, 44px target. Hover: light overlay behind the icon. Focus: 3px white ring. Active: darker overlay. Disabled, Loading, Error: n/a.	a with an aria-label and an aria-hidden svg.
Profile icon (toggle button)	Default: grey circle avatar, 44px target. Hover: pointer cursor. Focus: 3px white ring. Active (open): account panel visible. Disabled, Loading, Error: n/a.	button with aria-label=Your account, aria-expanded=false or true, aria-controls=account-panel. Opens on click. Closes on a second click, an outside click, or Escape (focus returns to the button).
Show W# (toggle button inside the panel)	Default: eye icon and the text Show W#. Hover: underline. Focus: 3px white ring. Active (on): shows the number W00000000. Disabled, Loading, Error: n/a.	button with aria-pressed=false or true. Text changes with the state.
Profile Settings, Code Purple (panel links)	Default: white text on dark purple, 44px tall (Code Purple is a banner 88px tall). Hover: underline. Focus: 3px white ring. Active: darker fill. Disabled, Loading, Error: n/a.	a with href=#. Code Purple has aria-label=Code Purple emergency notifications.
eWeber, Logout (panel buttons)	Default: skewed purple (eWeber) and orange #b5472c (Logout) buttons, white italic text, 44px tall. Hover: 15% darker. Focus: 3px white ring. Active: darkest fill. Disabled: n/a. Loading: progress label. Error: n/a.	a with href=eWeber.html and href=login.html. :hover, :focus-visible, :active.
WSU shield logo, Admissions, Academics, Student Life & Safety, About WSU, The Arts, Athletics, Donate (site navigation links)	Default: dark grey #3d3d3d on white, 44px tall. Hover: underline and purple text. Focus: 3px blue ring. Active: darker text. Disabled, Loading, Error: n/a.	a inside nav aria-label=Primary or Secondary. The logo link has aria-label=Weber State University home.
Student Stories (hero button)	Default: skewed purple #6a3d9a, white bold italic text, 44px tall. Hover: darker purple. Focus: 3px white ring. Active: darkest fill. Disabled, Loading, Error: n/a.	a with href=#. :hover, :focus-visible, :active.
Questions? (floating button)	Default: purple pill fixed at bottom right, 56px tall, white bold text and chat icon. Hover: darker purple. Focus: 3px ring (blue on the white page). Active: darkest fill. Disabled: n/a. Loading: progress label. Error: n/a.	a with href=#, position fixed. :hover, :focus-visible, :active.
eWeber.html
Component	Visual states	Programmatic states
WSU Home, A-Z Index, Calendar, Canvas, Employee Directory, Maps, Online Degrees, Info for, Weather Status, Messages, Search, Your account (utility links)	Same as the utility links on home.html. WSU Home and the account avatar link back to home.html.	Same as home.html. The account avatar is a link, not a toggle.
Portal search field (search input)	Default: 44px box, purple-grey border, placeholder Search for Portal Apps… Hover: border darkens. Focus: 3px blue ring. Active: text shown as typed. Disabled: n/a. Loading: read-only while results load. Error: n/a (an empty search is allowed).	input type=search with a hidden label (class sr-only) inside form role=search.
Search (green icon button)	Default: dark green #2f5d46, white magnifier, 44px tall. Hover: darker green #244a37. Focus: 3px blue ring. Active: darkest green. Disabled: n/a. Loading: icon replaced by a spinner with Searching… announced. Error: n/a.	button type=submit with aria-label=Search. Submitting shows the results state, moves focus to the heading, and announces the result count with role=status. Loading: aria-busy=true on the card list.
eWeber Help, New tasks (button-style links)	Default: Help is dark red #7a2a10 with white italic text, 44px tall. New tasks is a purple tile 78px tall. Hover: darker fill. Focus: 3px blue ring. Active: darkest fill. Disabled, Loading, Error: n/a.	a with href=#. :hover, :focus-visible, :active.
Featured, Browse All, Academics, Accounts, Administration, Admissions, Campus Life, Directories, Financial Aid, Human Resources, IT Services, Payroll, Registration, Teaching and Advising, Transportation, Tuition and Fees (category links)	Default: dark grey text, 44px tall, line under each. Hover: light purple #f1ecf6 background. Focus: 3px blue ring. Active: grey #ececec background (also the current item). Disabled, Loading, Error: n/a.	a inside nav aria-labelledby=Categories. Featured has aria-current=true and returns to the Featured state when pressed. The others are href=# placeholders.
Register for Classes (Add / Drop) card (clickable card)	Default: white card with a soft shadow. Hover: 2px purple outline around the whole card, pointer cursor. Focus: 3px ring around the whole card. Active: outline thickens. Disabled, Loading, Error: n/a.	The title link is stretched over the card, so there is one link per card: href=registrationSubMenu.html. Present in both the Featured and the results states.
All other card titles (links, such as Wildcat Mail through Unofficial Transcript)	Default: bold purple, underlined, 44px click area. Hover: darker purple. Focus: 3px blue ring. Active: darkest color. Disabled, Loading, Error: n/a.	a with href=# placeholders inside h3.
Details (button on every card)	Default: purple fill, white bold text, 44px tall. Hover: darker #331d4f. Focus: 3px blue ring. Active: darkest fill. Disabled: n/a. Loading: progress label. Error: n/a.	button type=button. No action yet. :hover, :focus-visible, :active.
Favorite (toggle button on every card)	Default (off): purple fill, text Favorite. Hover: darker purple. Focus: 3px blue ring. Active (on): green #2f5d46 fill, text Favorited. Disabled, Loading, Error: n/a.	button with aria-pressed=false or true. Text changes with the state.
registrationSubMenu.html
Component	Visual states	Programmatic states
eWeber portal home (grid icon), Weber State University logo, Settings (gear) (banner links)	Default: white icon or text on brown #554f46, 44px tall. Hover: underline. Focus: 3px white ring. Active: darker bar. Disabled, Loading, Error: n/a.	a elements. Icon links have aria-label (eWeber portal home, Settings). The logo link goes to home.html.
Student, Registration (breadcrumb links)	Default: purple, underlined, 44px tall. Hover: darker purple. Focus: 3px blue ring. Active: darkest color. Disabled, Loading, Error: n/a.	a inside nav aria-label=Breadcrumb in a ul. Registration has aria-current=page. Student goes to eWeber.html.
Register for Classes (menu link)	Default: purple, underlined, 44px tall, with its description below. Hover: darker purple. Focus: 3px blue ring. Active: darkest color. Disabled, Loading, Error: n/a.	a with href=classSearchMenu.html.
Prepare for Registration, Plan Ahead, Search Class Schedule, Student Course Schedule, Browse Course Catalog (menu links)	Same as Register for Classes.	a with href=# placeholders.
classSearchMenu.html
Component	Visual states	Programmatic states
eWeber portal home (grid icon), Weber State University logo, Settings (gear) (banner links)	Same as the banner links on registrationSubMenu.html.	Same as registrationSubMenu.html.
Student, Registration, Select a Term (breadcrumb links)	Same as the breadcrumb links on registrationSubMenu.html. The current page, Register for Classes, is plain text and not interactive.	Student goes to eWeber.html, Registration to registrationSubMenu.html, Select a Term is href=#.
Find Classes, Enter CRNs, Plans, Schedule and Options (tabs)	Default: plain text, 44px tall. Hover: light purple #f1ecf6 background. Focus: 3px blue ring drawn inside the tab. Active (selected): black #1a1a1a fill, white text. Disabled, Loading, Error: n/a.	role=tab inside role=tablist, aria-selected=true or false, roving tabindex, Left and Right arrow keys move between tabs, aria-controls points to a role=tabpanel. The three other panels say No content provided.
Subject, Course Number, Keyword, Campus, Buildings (text inputs)	Default: 44px box, grey border, label to the left. Hover: border darkens. Focus: 3px blue ring. Active: text shown as typed. Disabled: grey fill with reason. Loading: read-only. Error: n/a.	input type=text with a visible label tied by for and id.
Open Sections Only (checkbox)	Default: 24 × 24px box in a 44px row. Hover: row turns light purple. Focus: 3px blue ring. Active (checked): box shows a check. Disabled: grey with reason. Loading, Error: n/a.	Native input type=checkbox with a connected label.
Search (outlined button)	Default: white fill, 1px black border, 12px radius, 44px tall. Hover: light purple fill. Focus: 3px blue ring. Active: darker fill. Disabled: n/a. Loading: label reads Searching… with a spinner. Error: n/a.	button type=submit. Pressing it shows the message No content provided. with role=status.
Clear (reset button)	Default: purple underlined text, 44px tall. Hover: darker purple. Focus: 3px blue ring. Active: darkest color. Disabled, Loading, Error: n/a.	button type=reset. Resets the fields and clears the message.
Advanced Search (disclosure button)	Default (closed): the text ▸ Advanced Search. Hover: darker purple. Focus: 3px blue ring. Active (open): the text No content provided. appears below. Disabled, Loading, Error: n/a.	button with aria-expanded=false or true and aria-controls pointing to the hidden text.
Tuition and Fees (text link)	Same as the text links on login.html.	a with href=#.
Weekly calendar, Summary table (scrollable regions)	Default: bordered area with scroll bars. Hover: n/a. Focus: 3px blue ring around the region. Active: n/a. Disabled: n/a. Loading: n/a. Error: the summary table shows No content provided. in its first row.	div with tabindex=0, role=region, aria-label. Arrow keys scroll.
Submit (disabled button)	Default and Disabled: grey fill #e5e5e5, grey text #595959, not-allowed cursor. Hover, Focus, Active: n/a while disabled. Loading, Error: n/a.	button with the disabled attribute. Fallback explanation: visible text next to it, Submit is unavailable because no classes have been added, linked with aria-describedby. The text is not on the page yet.


 Step 3: Accessibility Architecture & WCAG Specification

	Semantic HTML Markup:
	Login.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Prototype</title>
</head>
<body>
    <header>
        <h1>Weber State University</h1>
    </header>

    <nav aria-label="Main navigation">
        <a href="home.html">Home</a>
    </nav>

    <main>
        <section aria-labelledby="login-heading">
            <h2 id="login-heading">WSU Secure Login</h2>
            <form>
                <fieldset>
                    <legend>Sign in</legend>
                    <label for="username">Wildcat Username</label>
                    <input type="text" id="username" name="username">

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">

                    <button type="submit">Login</button>
                </fieldset>
            </form>
            <nav aria-label="Login help">
                <a href="#">Need your Wildcat Username?</a>
                <a href="#">Forgot your password?</a>
            </nav>
        </section>

        <section aria-labelledby="help-heading">
            <h2 id="help-heading">IT Service Desk</h2>
            <a href="tel:8016267777">801-626-7777</a>
            <a href="#">IT Service Chat</a>
        </section>
    </main>

    <footer>
        <p>Weber State University</p>
    </footer>
</body>
</html>

Home.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Prototype</title>
</head>
<body>
    <header>
        <h1>Weber State University</h1>
        <nav aria-label="Quick links">
            <a href="#">A-Z Index</a>
            <a href="#">Calendar</a>
            <a href="#">Canvas</a>
            <a href="#">Employee Directory</a>
            <a href="#">Maps</a>
        </nav>
    </header>

    <nav aria-label="Main navigation">
        <a href="#">Admissions</a>
        <a href="#">Academics</a>
        <a href="#">Student Life and Safety</a>
        <a href="#">About WSU</a>
        <a href="#">Athletics</a>
        <a href="#">Donate</a>
    </nav>

    <main>
        <section aria-labelledby="hero-heading">
            <h2 id="hero-heading">Grow with Weber</h2>
            <p>Discover Weber State student stories and opportunities.</p>
            <a href="#">Student Stories</a>
        </section>
    </main>

    <footer>
        <nav aria-label="Help">
            <a href="#">Questions?</a>
        </nav>
    </footer>
</body>
</html>

eWeber.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eWeber Prototype</title>
</head>
<body>
    <header>
        <h1>eWeber Portal</h1>
        <nav aria-label="Quick links">
            <a href="home.html">WSU Home</a>
            <a href="#">Calendar</a>
            <a href="#">Canvas</a>
            <a href="#">Search</a>
        </nav>
    </header>

    <nav aria-label="Portal categories">
        <h2>Categories</h2>
        <a href="#">Featured</a>
        <a href="#">Academics</a>
        <a href="#">Accounts</a>
        <a href="#">Admissions</a>
        <a href="registrationSubMenu.html">Registration</a>
    </nav>

    <main>
        <section aria-labelledby="apps-heading">
            <h2 id="apps-heading">Featured</h2>
            <form role="search">
                <fieldset>
                    <legend>Search portal apps</legend>
                    <label for="portal-search">Search for Portal Apps</label>
                    <input type="search" id="portal-search" name="search">
                    <button type="submit">Search</button>
                </fieldset>
            </form>
            <section aria-label="Portal applications">
                <article>
                    <h3><a href="registrationSubMenu.html">Registration</a></h3>
                    <button type="button">Details</button>
                    <button type="button">Favorite</button>
                </article>
            </section>
        </section>
    </main>

    <footer>
        <a href="#">eWeber Help</a>
    </footer>
</body>
</html>

registrationSubMenu.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Prototype</title>
</head>
<body>
    <header>
        <a href="eWeber.html">eWeber Portal</a>
        <a href="home.html">Weber State University</a>
    </header>

    <nav aria-label="Breadcrumb">
        <a href="eWeber.html">Student</a>
        <a href="registrationSubMenu.html" aria-current="page">Registration</a>
    </nav>

    <main>
        <section aria-labelledby="registration-heading">
            <h1 id="registration-heading">Registration</h1>
            <h2>What would you like to do?</h2>
            <nav aria-label="Registration tasks">
                <ul>
                    <li><a href="#">Prepare for Registration</a></li>
                    <li><a href="classSearchMenu.html">Register for Classes</a></li>
                    <li><a href="#">Plan Ahead</a></li>
                    <li><a href="#">Search Class Schedule</a></li>
                    <li><a href="#">Student Course Schedule</a></li>
                    <li><a href="#">Browse Course Catalog</a></li>
                </ul>
            </nav>
        </section>
    </main>

    <footer>
        <p>Weber State University</p>
    </footer>
</body>
</html>

classSearchMenu.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Search Prototype</title>
</head>
<body>
    <header>
        <a href="eWeber.html">eWeber Portal</a>
        <a href="home.html">Weber State University</a>
    </header>

    <nav aria-label="Breadcrumb">
        <a href="eWeber.html">Student</a>
        <a href="registrationSubMenu.html">Registration</a>
        <a href="#">Select a Term</a>
        <span aria-current="page">Register for Classes</span>
    </nav>

    <main>
        <nav aria-label="Registration sections">
            <button type="button">Find Classes</button>
            <button type="button">Enter CRNs</button>
            <button type="button">Plans</button>
            <button type="button">Schedule and Options</button>
        </nav>

        <section aria-labelledby="search-heading">
            <h1 id="search-heading">Enter Your Search Criteria</h1>
            <p>Term: Fall 2026</p>
            <form>
                <fieldset>
                    <legend>Class search</legend>
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject">

                    <label for="course-number">Course Number</label>
                    <input type="text" id="course-number" name="course-number">

                    <label for="keyword">Keyword</label>
                    <input type="text" id="keyword" name="keyword">

                    <label for="campus">Campus</label>
                    <input type="text" id="campus" name="campus">

                    <label for="buildings">Buildings</label>
                    <input type="text" id="buildings" name="buildings">

                    <label for="open-only">Open Sections Only</label>
                    <input type="checkbox" id="open-only" name="open-only">

                    <button type="submit">Search</button>
                    <button type="reset">Clear</button>
                    <button type="button">Advanced Search</button>
                </fieldset>
            </form>
        </section>

        <section aria-labelledby="schedule-heading">
            <h2 id="schedule-heading">Class Schedule for Fall 2026</h2>
        </section>

        <section aria-labelledby="summary-heading">
            <h2 id="summary-heading">Summary</h2>
            <a href="#">Tuition and Fees</a>
        </section>

        <button type="button" disabled>Submit</button>
    </main>

    <footer>
        <p>Weber State University</p>
    </footer>
</body>
</html>

ARIA & Screen Reader Hooks
Component	Accessibility Specification
Collapsible element from profile button	Aria-expanded=”true/false”
Error message for when user doesn’t have correct information for login page	Aria-live=”polite”

Note: The actual flow doesn’t have lots of these points. I have document above where a component would need to have accessibility specification to the best of my abilities.

Visual Accessibility
Ran through axeDev Tools to see if any color ratio errors appeared, there was none.

Post-Mortem Reflection
1.	How did explicitly defining every component state (Hover, Focus, Active, Loading, Error) during the specification phase prevent dynamic usability bugs that static wireframes completely fail to address?
Do this made sure that every element in the flow had a way to define its state visibly. This helped us now when things were interacted with even though it is a static wire frame. This prevented dynamic usability bugs because we could see if we were missing any of those states. Missing just one of those states would make it impossible for accessibility tools, like the voice reader, to fill the user in on what is happening.
2.	Describe a scenario in your prototype where system latency or asynchronous data processing required specialized micro-interaction feedback (e.g., loading skeletons or aria-live announcements). How does your design keep the user informed and prevent repeated submission errors?
When the user clicks submit for the course search, they are informed that the system is searching for their course. I will be the first to admit that because of time constraints we did not get this built into the prototype directly but that is what we would be doing had there been enough time. This way, the user dose not feel that they need to keep hitting the submit button. There would also be a loading screen that would show for users that can visually see the screen. 

