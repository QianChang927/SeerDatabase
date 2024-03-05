package com.robot.app.sumstone.model
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   
   public class SumGiftModelMovie
   {
       
      
      public var type:int;
      
      public var npcId:int;
      
      public var dialog:String;
      
      public var answer:String;
      
      public var frame:uint;
      
      public var mcName:String;
      
      public var swfName:String;
      
      public function SumGiftModelMovie()
      {
         super();
      }
      
      public static function readXmlData(param1:XML) : SumGiftModelMovie
      {
         if(!param1)
         {
            return null;
         }
         var _loc2_:SumGiftModelMovie = new SumGiftModelMovie();
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
         }
         return _loc2_;
      }
   }
}
