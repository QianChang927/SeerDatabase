package com.robot.core.event
{
   import flash.events.Event;
   
   public class PeopleActionEvent extends Event
   {
      
      public static const WALK:String = "walk";
      
      public static const GROUP_WALK:String = "group_walk";
      
      public static const FLY:String = "fly";
      
      public static const CHAT:String = "chat";
      
      public static const COLOR_CHANGE:String = "colorChange";
      
      public static const CLOTH_CHANGE:String = "clothChange";
      
      public static const DOODLE_CHANGE:String = "doodleChange";
      
      public static const PET_SHOW:String = "petShow";
      
      public static const PET_HIDE:String = "petHide";
      
      public static const NAME_CHANGE:String = "nameChange";
      
      public static const AIMAT:String = "atmat";
      
      public static const DECORATE:String = "decorate";
      
      public static const SPECIAL:String = "special";
      
      public static const NONO_FOLLOW:String = "nonoFollw";
      
      public static const NONO_HOOM:String = "nonoHoom";
       
      
      private var _data:Object;
      
      public function PeopleActionEvent(param1:String, param2:Object = null)
      {
         super(param1,false,false);
         this._data = param2;
      }
      
      public function get data() : Object
      {
         return this._data;
      }
   }
}
