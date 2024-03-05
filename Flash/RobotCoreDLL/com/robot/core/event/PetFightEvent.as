package com.robot.core.event
{
   import flash.events.Event;
   
   public class PetFightEvent extends Event
   {
      
      public static const FIGHT_READY_DATA:String = "fight_ready_data";
      
      public static const CATCH_PET:String = "catchPet";
      
      public static const FIGHT_RESULT:String = "fightResult";
      
      public static const ALARM_CLICK:String = "alarmClick";
      
      public static const TASK_FIGHT_OVER:String = "taskFightOver";
      
      public static const AUTO_USE_SKILL:String = "autoUseSkill";
      
      public static const START_FIGHT:String = "startFight";
      
      public static const USE_SKILL:String = "useSkill";
      
      public static const USE_SKILL_SUC:String = "useSkill_suc";
      
      public static const USE_SKILL_AUTO:String = "auto_useSkill";
      
      public static const USE_SKILL_SUC_ATTACK:String = "useSkill_suc_attack";
      
      public static const SKILL_MOVIE_DONE:String = "skillMovieDone";
      
      public static const SKILL_ATK_DONE:String = "skill_atk_done";
      
      public static const LOST_HP:String = "lostHp";
      
      public static const GAIN_HP:String = "gainHp";
      
      public static const REMAIN_HP:String = "remainHp";
      
      public static const NO_BLOOD:String = "noBlood";
      
      public static const FIGHT_OVER:String = "fightOver";
      
      public static const FIGHT_CLOSE:String = "fightClose";
      
      public static const CHANGE_PET:String = "changePet";
      
      public static const PET_UPDATE_PROP:String = "petUpdateProp";
      
      public static const PET_UPDATE_SKILL:String = "petUpdateSkill";
      
      public static const BATTLE_OVER:String = "battleOver";
      
      public static const ON_OPENNING:String = "onOpenning";
      
      public static const USE_PET_ITEM:String = "usePetItem";
      
      public static const ON_USE_PET_ITEM:String = "onUsePetItem";
      
      public static const ON_NO_PET_ITEM:String = "onNoPetItem";
      
      public static const ESCAPE:String = "escape";
      
      public static const PET_HAS_EXIST:String = "petHasExist";
      
      public static const AUTO_SELECT_PET:String = "autoSelectPet";
      
      public static const CATCH_SUCCESS:String = "catchSuccess";
      
      public static const GET_FIGHT_INFO_SUCCESS:String = "getFightInfoSuccess";
      
      public static const PET_UPDATE_INFORM:String = "petupdateinform";
      
      public static const REPLAY_NEXT:String = "replayNext";
      
      public static const REPLAY_END:String = "replayEnd";
      
      public static const INITIATIVE_OVER_FIGHT:String = "initiative_over_Fight";
      
      public static const CHANGEFACE_OVER:String = "changeface_over";
      
      public static const SIGNBUFF_CHANGE:String = "signbuff_change";
      
      public static const SIGNBUFF_CHANGE_LVNUM:String = "signbuff_change_lvNum";
      
      public static const CHANGE_PET_NOTE:String = "change_pet_note";
      
      public static const SHOW_MARK_PANNEL:String = "show_mark_pannel";
       
      
      private var obj:Object;
      
      private var _fun:Function;
      
      public function PetFightEvent(param1:String, param2:Object = null, param3:Function = null, param4:Boolean = false, param5:Boolean = false)
      {
         super(param1,param4,param5);
         this.obj = param2;
         this._fun = param3;
      }
      
      public function get dataObj() : Object
      {
         return this.obj;
      }
      
      public function get fun() : Function
      {
         return this._fun;
      }
   }
}
