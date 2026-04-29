# Savvy Coders Project Boilerplate Starter Kit

## Overview

This template repository contains several opinionated, 'starter' files and settings to help Savvy Coder students focus more time and energy on learning how to code and/or craft 'business logic' for projects and less time on configurations.

In addition to a '.gitignore' and some VS Code specific extensions and settings, it includes the 'recommended' settings for:

1. [ESLint](eslint.org)
2. [Stylelint](stylelint.io)
3. [Prettier](prettier.io)

## Get Started

**First and foremost,** make sure that your local machine is set up with all of the 'dev environment tooling' as per the instructions in the curriculum.

Well, after establishing your directory structure on your local machine, (e.g. '~/Code/SavvyCoders'), clone the Savvy Starter Repo - essentially, there should be a button that says **Use this template.**

> [Read more about using templates on GitHub here...](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

Once this repo has been created on your GitHub, you can click on the button to 'clone' it as usual.

Once it's `clone`d to your local machine, `cd` into the directory and **be sure to do:** `npm i` to get all of the dependencies installed. If you see any _errors_ (warnings are OK) on Windows, you may have to do `npm install`.

Now, enter `code .` to open this project in VS Code, and look for a prompt to 'install some extensions' once inside VS Code (in the bottom `right` of your screen). You should install these.

In your repo, feel free to update this README and make any other initial changes to files, etc. Then go ahead and do your usual `git` steps -- add, commit, and push.

**Note:** This is a template repository, no need to 'fork it.

# Week 1 Capstone Project Planning Week 1 Homework
##### Definition Statement:
I want to build an application that generates a geocentric astrological chart using astronomical accuracy, reflecting the 13 unevenly sized constellations positioned along the ecliptic and the positions of the planets within those constellations for an exact location, time, and date.

##### Define Your Audience:
Individuals who want to practice astrology utilizing the actual placements of the planets if you were to look up at the sky.

##### Outline Content of Application-
######  Every Page:
 Contains a nav bar and a footer with site and contact information.

###### Homepage:
 A brief statement regarding the difference between Tropical astrology and the position of the planets if you actually look up at the sky.

###### About Page:
Contains information regarding the difference between Tropical and true sky astrology and the cause of the difference, as well as the origins of astrology being reflective of the true sky and possibly Ptolemy's influence on tropical astrology. Contains two navigation options and describes the purpose of each. One is the Natal chart and purpose or use, the other is a current transits chart and purpose or use in astrology.Also includes a statement regarding contacting a professional astrologer for a reading and a heads up regarding the use of AI in astrological interpretations, and it's habit of misinterpreting the chart placements for tropical placements, and notes the difference between sidereal and true sky or astronomical astrology.

###### Natal Chart Page:
Generates a natal birth chart for the user based on the inputs in the Name, Date, Location, and Time of birth fields. A brief statement regarding the definition of a natal chart or birth chart and the use in astrology.

###### Current Transits Page:
Generates the users current astrological transits based on the current position of each planet in reference to the position of the planets the moment the user was born. A brief statement regarding the astrological purpose of a transits chart.

###### Contact/Feedback Page:
Contains contact form for the user to fill out to contact the app developer, encouraging feedback or comments. Maybe a buy me a coffee button.

##### Purpose of Application
Generates a free natal birth chart and transits chart displaying the actual positions of the planets if you look at the sky and allows the user to save the chart.

##### Real World Problem Solved:
99% of the astrological natal chart and current transit chart generators available online to use for free in the browser is based on Tropical astrology or Western Sidereal astrology, or Vedic Astrology, none of which provide the planetary placements as they were/are in the actual sky at any given time.The 1% that DO offer the actual planetary placements, do not allow the saving of the chart unless you pay a $15/month fee, requires sign in to access the online software, or only provide the placements of the Sun, Moon, and Ascendant.

##### Attributes of Website-
###### Color Palette:https://coolors.co/000000-291528-3a3e3b
###### Images:
###### Fonts:MontserratAlternates-Black.ttf
###### Logos:
###### Navigation:

##### Create and provide a link to User Story Map in Mural: WILL BE SUBMITTED BEFORE CLASS STARTS ON MON 4/6

##### Research the following:

###### List Applications Researched: (links to websites/apps)
(https://astro.cafeastrology.com/natal.php), https://alabe.com/freechart/default.asp, https://horoscopes.astro-seek.com/birth-chart-horoscope-online, https://www.chani.com/chart#, https://www.costarastrology.com/natal-chart, https://www.dailyom.com/horoscopes/birth-chart-calculator

###### List what you like about each site:
•Plenty of space between page elements, not crowded •Link landed directly on page to generate birth chart without requiring additional clicks to navigate the page •Navigation bars visible immediately •Easy to navigate

###### List what you do not like about each site:
•Doesn't inform the user that the chart they are getting doesn't reflect the real sky •Boring color palettes •No informational content on the page regarding astrological purpose

###### How my application will be different:
•Interesting color palette •Informs users of the chart displaying the positions of the planets in the real sky, being transparent in chart calculation •Generates a chart displaying the planets positions in the real sky and uses 13 constellations instead of 12 •Contains images showing difference between even signs and signs based on actual constellation sizes •Contains images showing the symbols of astrology

##### Create wireframes and provide link for each page (minimum of 4-5 pages) including Home, About Me, Contact Us, and 1-2 other pages demonstrating the specific functionality of your capstone's purpose
WILL BE SUBMITTED BEFORE CLASS STARTS MON 4/6

##### Create and provide Link to User Flow Diagram
" " " "

##### Create and provide link to SWOT Analysis
" " " "


NOTE: If you want to add another model, like a user model, for sign in or whatever, you could basically copy BirthInfo.js, and the main thing you would change is the parts that say "BirthInfo" to whatever makes sense for what you're doing. You'd create a new controller. Basically copy the files in the models and controllers folders and update the original names from birthInfos and BirthInfo to the new name. Don't forget to export default router at the bottom, and in the app.js file, which in the server folder, add an app.use statement to add the new router you just made in your controllers file.
