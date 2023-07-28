#import "template.typ": *

// Take a look at the file `template.typ` in the file panel
// to customize this template and discover how it works.
#show: project.with(
  title: "Create a Narrative Visualization",
  authors: (
    "Yongda Fan",
  ),
)

= Messaging
// What is the message you are trying to communicate with the narrative visualization?
This narrative visualization aims to communicate how different things affect the spread of covid-19 in the United States. It shows the growth of the spread and critical event timelines. It also allows viewers to explore the correlation between the spread and other factors using a scatter plot at the end of the presentation. 

= Narrative Structure
// Which structure was your narrative visualization designed to follow (martini glass, interactive slide show or drop-down story)? How does your narrative visualization follow that structure? (All of these structures can include the opportunity to "drill-down" and explore. The difference is where that opportunity happens in the structure.)
This narrative visualization follows the martini glass structure. The first two scenes are author-driven content and the third scene is reader-driven content.

== Author-Driven Content
The first two scenes are characterized as author-driven content because the reader does not have much freedom in terms of interactions. The only thing they can do is use the tooltip. Additionally, the author has a clear story of what to tell at this stage.

On the first scene, the author directs the reader to observe the change in the number of cases as time goes by for each state. On the second scene, the author directs the reader to observe the important events that happened in the pandemic and leads the reader to think about the relationship between the increased rate of cases with respect to these events.  

== Reader-Driven Content

The third scene is characterized as reader-driven content because the reader has lots of interaction options. They may change the variable on the x-axis or y-axis, or use the tooltip. Additionally, the author does have a strong message here other than instructing readers to explore the data by themself.

= Visual Structure
// What visual structure is used for each scene? How does it ensure the viewer can understand the data and navigate the scene? How does it highlight to urge the viewer to focus on the important parts of the data in each scene? How does it help the viewer transition to other scenes, to understand how the data connects to the data in other scenes?

#figure(
  image("visual_structure.jpeg", width: 60%),
  caption: [
    different blocks in the webpage
  ],
)

The visual structure is consistent across three scenes. On the top, there is the title of narrative visualization (see block 1), followed by a page number menu (see block 2). After that, there is a text block on the left (see block 3) and a chart on the right (see block 4).

The title gives a overview of this entrire narriative visualization; the page number menu gives the reader ability to navitage between scenes; the text block gives a overall description of this scene; and the chart shows gives a visualization of the data. 

Reader will first focus on the chart because it's biggest and with color, so it is easy to get reader's attention. Then, reader will start to read text block because it's the second biggest block, and it will give readers descriptions of this scene as well as how to interact with the chart. Specifically, on the scene 2, because we want reader to focus on event annotation instead of the trend of covid cases, we fade away those lines to highlight the event annotation.

#figure(
  image("visual_structure_2.jpeg", width: 60%),
  caption: [
    lines of covid cases are faded away to help focus on event annotation
  ],
)

Reader may navigate between scenes easily using the page number menu, the overall visual structure is consistent (as mention above) across the scenes, to keep reader orentation from the tansition. Specifically, because the first two scenes are connected in terms of story telling, the chart in second scenes keeps the data from the chart in first scene but faded, to give a smoother transition to the reader. Additionally, in all three scenes, the color representation for a particular state remain the same, which gives the color consistency. 

= Scenes
// What are the scenes of your narrative visualization? How are the scenes ordered, and why?
There are 3 scenes in total. The first scene shows the trend of covid cases for each states; the second scene add event annoation on top of that; the third scene gives reader the opptunity to explore by them self. There are two main reasons that determine the order of scenes. 

Firstly, this order fullfil the martini glass structure (i.e. author-driven content first, reader-driven content afterwards), a detailed explanation is presented above at Narrative Structure section. 

Secondly, the scenes are ordered in terms on information complexity, which help reader to get familar with data and emerge into this presentation. For example, the first scene only have the covid cases number for each state from 2021 to 2023; the second scene add event annotation; the third scene have lots of varaibles can be explored using scatter plot. By adding a little bit extra complexte on each scene, the reader will not feel overwhlemed by it.

= Annotations
// What template was followed for the annotations, and why that template? How are the annotations used to support the messaging? Do the annotations change within a single scene, and if so, how and why

#figure(
  image("annotation.jpg", width: 30%),
  caption: [
    tooltip of event
  ],
)

On page 2, there are event annotations. They follow the same structure (i.e. red circle at top with a red line). This template highligh the time a event happened; the red circle allow reader to hover the mouse on it and see the detail using tooltip. This annotation is critial, because it gives the reader a visual cue about when a event happened and how covid cases arise around the same time. These annotationa does not change within a sginle scene. 

= Parameters
// What are the parameters of the narrative visualization? What are the states of the narrative visualization? How are the parameters used to define the state and each scene?
- page number: The current page number is shown in the page menu with red color. It defines which scene the reader is looking at. The possible states for this parameter are `[1, 2, 3]`.
- tooltip: It includes if a tooltip will be shown and corresponding data. The state can be either `shown` or `hidden`, if it is `shown`, then the state will also includes the tooltip position and display information. 
#figure(
  image("tooltip.jpg", width: 80%),
  caption: [
    tooltips of all pages
  ],
)
- variable for x-axis and y-axis (page 3 only): They control the x-axis and y-axis in the scatter plot of page 3. For x-axis, the possible states are `[population, mask_usage, health_cost_total, health_cost_per_capita]`; for y-axis, the possible states are `total_infection_cases, infection_percentage]`.
#figure(
  image("scatter_plot.jpg", width: 30%),
  caption: [
    variable selection for x-axis and y-axis
  ],
)

= Triggers
// What are the triggers that connect user actions to changes of state in the narrative visualization? What affordances are provided to the user to communicate to them what options are available to them in the narrative visualization?


