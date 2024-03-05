package com.robot.app.task.model
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.core.manager.MainManager;
   
   public class MainTaskDetailMod
   {
       
      
      public var type:int;
      
      public var npcId:int;
      
      private var _dialog:String;
      
      private var _answer:String;
      
      public var frame:uint;
      
      public var mcName:String;
      
      public var swfName:String;
      
      public function MainTaskDetailMod()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : MainTaskDetailMod
      {
         if(!param1)
         {
            return null;
         }
         var _loc2_:MainTaskDetailMod = new MainTaskDetailMod();
         _loc2_.type = param1.attribute("type");
         switch(_loc2_.type)
         {
            case TaskDiaLogManager.DIALOG:
               _loc2_.npcId = param1.attribute("npcid");
               _loc2_.dialog = param1.attribute("dialog");
               _loc2_.answer = param1.attribute("answer");
               break;
            case TaskDiaLogManager.MAP_MOVIE:
               _loc2_.frame = param1.attribute("frame");
               _loc2_.mcName = param1.attribute("mcname");
               break;
            case TaskDiaLogManager.FUL_MOVIE:
               _loc2_.swfName = param1.attribute("swfname");
               break;
            case TaskDiaLogManager.DLG_MOVIE:
               _loc2_.swfName = param1.attribute("swfname");
         }
         return _loc2_;
      }
      
      public function set dialog(param1:String) : void
      {
         this._dialog = param1;
      }
      
      public function get dialog() : String
      {
         return this._dialog.replace(new RegExp(/nick/g),MainManager.actorInfo.formatNick);
      }
      
      public function set answer(param1:String) : void
      {
         this._answer = param1;
      }
      
      public function get answer() : String
      {
         return this._answer.replace(new RegExp(/nick/g),MainManager.actorInfo.nick);
      }
   }
}
