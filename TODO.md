# Exercise: Time-SeriesData Visualization

## Objective

Thegoalofthisexerciseistofetchtime-seriesdatafromaRESTAPIandvisualizeitusinga
chartinglibraryinaReactapplication.Thiswilldemonstrateyourabilitytointegratewithexternal
APIsontheserverside,managedata,andpresentiteffectivelyusingmodernfront-endtools.

## Requirements

1. **FetchDataServer-Side** :Retrievetime-seriesdatafromtheRESTAPIinthe
   server-sideoftheapplication.WerecommendusingNext.js,Remixorasimilar
   frameworkforstartingafullstackapplicationquickly.
2. **DisplayDataClient-Side** :Showthedatainachartonawebpage.
3. **UseaChartingLibrary** :Youcanuseanymodernchartinglibrary(e.g.Recharts,
   Chart.js,orHighcharts).Youmayincludeanyother3rdpartylibrariesofyourchoice.

## SuggestedAPI

UsetheOpen-MeteoAPIforhistoricalweatherdata.ThedocumentationfortheAPIendpointis
here:
https://open-meteo.com/en/docs/historical-forecast-api

## ProductRequirements

**1. WebPagewithTimeRangeSelection:**
a. Thewebsiteshouldincludeawebpagewiththeoptiontoselectthetimerange
andshowachartforthistimerange.
b. Bydefault,thetimerangewillbethelast 30 days.
c. Whentheuserreloadsthepageafterselectingatimerange,thewebsiteshould
showthesametimerange.
**2. ChartDetails:**
a. Thechartshoulddisplaytwolines:onefortheminimumtemperatureandonefor
themaximumtemperature.
b. Eachpointonthelinesshouldrepresentthecorrespondingminimumor
maximumtemperatureforeachday.

### Mockup

### BonusPoints

1. **Styling** :Addbasicstylingtomakethechartandthepagelookcleanandprofessional.
2. **Interactivity** :Implementbasicinteractivityinthechart(e.g.,tooltips,zooming,or
   panning).

## Deliverables

1. **SourceCode** :Providethecompletesourcecodeforyourproject.
2. **Documentation** :IncludeaREADMEfilewithinstructionsonhowtoruntheprojectand
   abriefdescriptionofyourapproach.
3. **Nextsteps:** Brieflydescribewhatelseyouwouldhavedonedifferentlygivenmoretime.

## Notes

1. **Security** :Alwaysfollowsecuritybestpractices,especiallywhenhandlingsensitivedata
   andAPIcalls.

2. **CodeQuality** :Writeclean,maintainable,andextendablecode.Followbestpracticesfor
   separationofconcernsandmodularity.
3. **ProductionReadiness** :Ensuretheapplicationisproduction-readywithpropererror
   handling,validation,andoptimizationwherenecessary.
4. Thesolutiontothisexerciseshouldbeyourownindividualwork.Usingexternaldata
   sources(Google,stackoverflow,etc)orAI(ChatGPT,Copilot,etc)isallowed.
