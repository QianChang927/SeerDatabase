package com.robot.app2.control.jsControl
{
   import com.robot.app2.control.jsControl.command.BaseCommand;
   import com.robot.app2.control.jsControl.command.Command3V3;
   import com.robot.app2.control.jsControl.command.Command6V6;
   import com.robot.app2.control.jsControl.command.HideModuleCmd;
   import com.robot.app2.control.jsControl.command.ShowModuleCmd;
   import flash.events.EventDispatcher;
   import flash.external.ExternalInterface;
   import flash.utils.Dictionary;
   
   public class JSController extends EventDispatcher
   {
      
      private static var _instance:com.robot.app2.control.jsControl.JSController;
       
      
      private var _commands:Dictionary;
      
      public function JSController()
      {
         this._commands = new Dictionary();
         super();
         if(ExternalInterface.available)
         {
            ExternalInterface.addCallback("jsCommand",this.jsCommand);
         }
         this._commands[Commands.PK_3V3] = Command3V3;
         this._commands[Commands.PK_6V6] = Command6V6;
         this._commands[Commands.HIDE_MODULE] = HideModuleCmd;
         this._commands[Commands.SHOW_MODULE] = ShowModuleCmd;
      }
      
      public static function get instance() : com.robot.app2.control.jsControl.JSController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.jsControl.JSController();
         }
         return _instance;
      }
      
      public static function setUp() : void
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.jsControl.JSController();
         }
      }
      
      public function jsCommand(param1:String, param2:* = null) : String
      {
         var _loc3_:JSEvent = null;
         if(this._commands[param1])
         {
            (new this._commands[param1](param2) as BaseCommand).excute();
         }
         else
         {
            _loc3_ = new JSEvent(JSEvent.JSEVENT);
            _loc3_.command = param1;
            _loc3_.args = param2;
            dispatchEvent(_loc3_);
         }
         return "excute " + param1;
      }
   }
}
