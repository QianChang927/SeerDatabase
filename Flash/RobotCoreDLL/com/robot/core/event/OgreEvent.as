package com.robot.core.event
{
   import com.robot.core.mode.OgreModel;
   import flash.events.Event;
   
   public class OgreEvent extends Event
   {
      
      public static const CLICK_OGRE:String = "clickOgre";
       
      
      private var _curModel:OgreModel;
      
      public function OgreEvent(param1:String, param2:OgreModel, param3:Boolean = false, param4:Boolean = false)
      {
         this._curModel = param2;
         super(param1,param3,param4);
      }
      
      public function get model() : OgreModel
      {
         return this._curModel;
      }
   }
}
