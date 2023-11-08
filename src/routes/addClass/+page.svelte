<script>
      import { createEventDispatcher } from 'svelte'
      let dispatch = createEventDispatcher()

      function closeModal() {
        dispatch('closeModal')
      }
</script>

<div class="addClassComponent p-4 bg-white rounded-md shadow-lg">
    <h1 class="">Section Information</h1>

    <input type="text" placeholder="Title">

    <input type="number" placeholder="Section">

    <input type="number" placeholder="Credit Hours">

    <select>
        <option value="">Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
    </select>

    <select>
        <option value="">Special Approval</option>
        <option value="Active">None Assigned</option>
        <option value="Inactive">Department Approval Required</option>
        <option value="Inactive">Contact Internship Coordinator</option>
    </select>

    <select>
        <option value="">Grade Mode</option>
        <option value="Active">Standard Letter</option>
        <option value="Inactive">Credit/No Credit</option>
    </select>

    <select>
        <option value="">Final Exam</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <select>
        <option value="">Cross-list With</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <select>
        <option value="">Part of Term</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <select>
        <option value="">Campus</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <select>
        <option value="">Instructional Method</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <select>
        <option value="">Visible</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <select>
        <option value="">Schedule Type</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <input type="text" placeholder="URL">

    <select>
        <option value="">Session</option>
        <option value=""></option>
        <option value=""></option>
    </select>

    <input type="text" placeholder="Restrictions">


    <h1>Section Attributes</h1>
    <textarea placeholder="HY - Hybrid Delivery"></textarea>


    <h1>Course Attributes</h1>
    <textarea placeholder="Lab Access fee of $45 applies"></textarea>


    <h1>Instructor</h1>
    <input type="text" placeholder="Instructor Name">


    <h1>Building and Room</h1>
    <input type="text" placeholder="CS 509">


    <h1>Meeting Pattern</h1>
    <select>
        <option value="">Session</option>
        <option value="MTWR">MTWR 50 Min</option>
        <option value="MWF">MWF 75 Min (50 Min Friday)</option>
        <option value="TRF">TRF 75 Min (50 Min Friday)</option>
        <option value="MW">MW 100 Min</option>
        <option value="Custom">Custom</option>
    </select>


    <h1>Enrollment</h1>
    <input type="number" placeholder="Maximum">
    <input type="number" placeholder="Waitlist Maximum">


    <h1>Section Text - Visible in student views</h1>
    <textarea placeholder="Description"></textarea>


    <h1>Comments</h1>
    <textarea placeholder="Details for ASO and/or Justifications for Dean/FM approvals. e.g. Animation Cohort"></textarea>


    <div class="flex justify-end">
        <button class="closeModalBTN mr-10" on:click={closeModal}>Close</button>
        <button class="saveClass">Save</button>
    </div>
</div>



<style>
    .addClassComponent {
        border: 1px solid #275D38;
    }
</style>










<!-- <form>
    <label for="title">Title</label>
    <select name="title" id="titleOptions">
        <option value="3D Modeling Essentials">3D Modeling Essentials</option>
        <option value="Animation Essentials">Animation Essentials</option>
        <option value="Animation Essentials Lab">Animation Essentials Lab</option>
        <option value="Scripting Essentials">Scripting Essentials</option>
        <option value="Concept Essentials"></option>
        <option value="Studio Technology Essentials">Studio Technology Essentials</option>
        <option value="3D Modeling and Animation">3D Modeling and Animation</option>
        <option value="Character Development">Character Development</option>
        <option value="Introduction to Rigging">Introduction to Rigging</option>
        <option value="Intro Rigging Lab">Intro Rigging Lab</option>
        <option value="Digital Storyboarding">Digital Storyboarding</option>
        <option value="Scripting for Animation I">Scripting for Animation I</option>
        <option value="Game Development I">Game Development I</option>
        <option value="Game Development II">Game Development II</option>
        <option value="Introduction to Compositing">Introduction to Compositing</option>
        <option value="Digital Lecture Series">Digital Lecture Series</option>
        <option value="Advanced Character Rigging">Advanced Character Rigging</option>
        <option value="Animation/Game Production II">Animation/Game Production II</option>
        <option value="Animation and Game Lab II">Animation and Game Lab II</option>
        <option value="Game Development III">Game Development III</option>
        <option value="Animation Story Development WE">Animation Story Development WE</option>
        <option value="Advanced Tech Direction II">Advanced Tech Direction II</option>
        <option value="Performance Animation">Performance Animation</option>
        <option value="Senior Capstone">Senior Capstone</option>
        <option value="Digital Cinema Editing I">Digital Cinema Editing I</option>
        <option value="Image Editing">Image Editing</option>
        <option value="Digital Media Essentials I">Digital Media Essentials I</option>
        <option value="Intro to Digital Cinema">Intro to Digital Cinema</option>
        <option value="Film Production Analysis">Film Production Analysis</option>
        <option value="Digital Cinema Production I">Digital Cinema Production I</option>
        <option value="Mixed Reality Essentials">Mixed Reality Essentials</option>
        <option value="Special Top in Digital Media">Special Top in Digital Media</option>
        <option value="Digital Cinema Production II">Digital Cinema Production II</option>
        <option value="Digital Audio Essentials">Digital Audio Essentials</option>
        <option value="Electronics for Media">Electronics for Media</option>
        <option value="Digital Photography Composit I">Digital Photography Composit I</option>
        <option value="Output and Color for Cinema I">Output and Color for Cinema I</option>
        <option value="Special Top in Digital Audio">Special Top in Digital Audio</option>
        <option value="Core Mixing Principles">Core Mixing Principles</option>
        <option value="Sound for Film and Television">Sound for Film and Television</option>
        <option value="Radio Production">Radio Production</option>
        <option value="DAW Training II">DAW Training II</option>
        <option value="Cinematography I">Cinematography I</option>
        <option value="Storytelling Digtl Media I WE">Storytelling Digtl Media I WE</option>
        <option value="Topics Animation/Game Dev">Topics Animation/Game Dev</option>
        <option value="Visualization for Digital Cine">Visualization for Digital Cine</option>
        <option value="Topics Web Design and Dev">Topics Web Design and Dev</option>
        <option value="Internship">Internship</option>
        <option value="DCP Lecture Series-CineSkype">DCP Lecture Series-CineSkype</option>
        <option value="Corporate Issues Dig Media WE">Corporate Issues Dig Media WE</option>
        <option value="Digital Media Intercul Comm GI">Digital Media Intercul Comm GI</option>
        <option value="Digital Media Project Mgmt">Digital Media Project Mgmt</option>
        <option value="Adv Top in Digital Audio">Adv Top in Digital Audio</option>
        <option value="Studio Engineering II">Studio Engineering II</option>
        <option value="Sound for Games">Sound for Games</option>
        <option value="Live Sound Reinforcement">Live Sound Reinforcement</option>
        <option value="DAW Training IV">DAW Training IV</option>
        <option value="Digital Cinema Production III">Digital Cinema Production III</option>
        <option value="Digital Cinema Prod Mgmt">Digital Cinema Prod Mgmt</option>
        <option value="Cinematography II">Cinematography II</option>
        <option value="Digital Cinema Editing II">Digital Cinema Editing II</option>
        <option value="Storytelling Digtl Media II WE">Storytelling Digtl Media II WE</option>
        <option value="Cinema Directing Workshop I">Cinema Directing Workshop I</option>
        <option value="Media Analytics">Media Analytics</option>
        <option value="Web Tools and Frameworks II">Web Tools and Frameworks II</option>
        <option value="Senior Capstone II">Senior Capstone II</option>
        <option value="Audio Mastering">Audio Mastering</option>
        <option value="Story Editing for Media">Story Editing for Media</option>
        <option value="Visual Effects for Dig Cine II">Visual Effects for Dig Cine II</option>
        <option value="Film Production Analysis II">Film Production Analysis II</option>
        <option value="Cinematography III">Cinematography III</option>
        <option value="Producing II">Producing II</option>
        <option value="Output and Color for Cinema II">Output and Color for Cinema II</option>
        <option value="Digital Cinema Editing III">Digital Cinema Editing III</option>
        <option value="Storytelling for Dig Media III">Storytelling for Dig Media III</option>
        <option value="Dig Cine Directing Workshop II">Dig Cine Directing Workshop II</option>
        <option value="Documentary II">Documentary II</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>
</form> -->