package com.robot.core.event
{
   import flash.events.Event;
   
   public class PetEvent extends Event
   {
      
      public static const ADDED:String = "added";
      
      public static const REMOVED:String = "removed";
      
      public static const SET_DEFAULT:String = "setDefault";
      
      public static const CURE_COMPLETE:String = "cureComplete";
      
      public static const CURE_ONE_COMPLETE:String = "cureOneComplete";
      
      public static const UPDATE_INFO:String = "updateInfo";
      
      public static const STORAGE_LIST:String = "storageList";
      
      public static const STORAGE_ADDED:String = "storageAdded";
      
      public static const STORAGE_REMOVED:String = "storageRsemoved";
      
      public static const LOVE_REMOVED:String = "loveremoved";
      
      public static const GET_LOVE_PET_LIST:String = "getLovePetList";
      
      public static const ADD_LOVE_PET:String = "addLovePet";
      
      public static const DEL_LOVE_PET:String = "delLovePet";
      
      public static const CHANGE_PET_SUCCESS:String = "changepetsuccess";
      
      public static const GET_ROWEI_PET_LIST:String = "getRoweiPetList";
      
      public static const ROWEI_PET:String = "roweiPet";
      
      public static const RETRIEVE_PET:String = "RetrievePet";
      
      public static const ROOM_PET_LIST:String = "roomPetList";
      
      public static const ROOM_PET_SHOW:String = "roomPetShow";
      
      public static const PET_UPDATE:String = "petUpdate";
      
      public static const START_EXE_PET:String = "startExePet";
      
      public static const STOP_EXE_PET:String = "stopExePet";
      
      public static const PROVING_PET:String = "provingPet";
      
      public static const STUDY_SPECIAL_SKILL:String = "studySpecialSkill";
      
      public static const STUDY_BLACK_SKILL:String = "studyBlackSkill";
      
      public static const SKILL_AWAKE_CLOSE:String = "SkillAwakeClose";
      
      public static const PET_UNLOCK:String = "petunlock";
      
      public static const EQUIP_SKIN:String = "euip_skin";
       
      
      private var _catchTime:uint;
      
      private var _obj:Object;
      
      public function PetEvent(param1:String, param2:uint, param3:Object = null)
      {
         super(param1,false,false);
         this._catchTime = param2;
         this._obj = param3;
      }
      
      public function catchTime() : uint
      {
         return this._catchTime;
      }
      
      public function obj() : Object
      {
         return this._obj;
      }
   }
}
