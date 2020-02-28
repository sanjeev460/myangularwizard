import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { WizardCompleteComponent } from './wizard-complete/wizard-complete.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


const routes: Routes = [
{path:"welcome",component:WelcomeComponent},

{path:"step1",component:PersonalDetailsComponent},
{path:"step2",component:SkillsComponent},
{path:"step3",component:ContactDetailsComponent},
{path:"step4",component:WorkExperienceComponent},
{path:"complete",component:WizardCompleteComponent},
{path:"",redirectTo:'welcome',pathMatch:'full'},
{path:"**",component:WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)]//{useHash:true}
  ,
  exports: [RouterModule]

})
export class AppRoutingModule { }
