package com.robot.app2.control
{
   public class LanternLionDanceConferenceControl
   {
      
      private static var _LanternLionDanceConferenceControl:com.robot.app2.control.LanternLionDanceConferenceControl;
       
      
      public var _getIndexArr:Array;
      
      public function LanternLionDanceConferenceControl()
      {
         this._getIndexArr = new Array();
         super();
      }
      
      public static function initstall() : com.robot.app2.control.LanternLionDanceConferenceControl
      {
         if(_LanternLionDanceConferenceControl == null)
         {
            _LanternLionDanceConferenceControl = new com.robot.app2.control.LanternLionDanceConferenceControl();
         }
         return _LanternLionDanceConferenceControl;
      }
      
      public function get getIndexArr() : Array
      {
         return this._getIndexArr;
      }
      
      public function clearGetIndexArr() : void
      {
         if(this._getIndexArr != null)
         {
            this._getIndexArr = null;
         }
         this._getIndexArr = new Array();
      }
   }
}
