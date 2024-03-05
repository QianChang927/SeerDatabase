package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.events.MouseEvent;
   
   public class PetSaveActiveController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function PetSaveActiveController()
      {
         super();
      }
      
      public static function initMap43(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.depthLevel["kelaruisi"].addEventListener(MouseEvent.CLICK,_npcClickHandler);
      }
      
      private static function _npcClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(812))
         {
            TaskDiaLogManager.single.playStory(getTaskArr(),function():void
            {
               BufferRecordManager.setMyState(812,true);
               ModuleManager.showModule(ClientConfig.getAppModule("PetSaveActivePanel"));
               SocketConnection.send(1022,86062427);
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetSaveActivePanel"));
         }
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["petSaveFull",true]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELARUISI,["许多稀有精灵因为长久的战乱流离失所，原本稀少的稀有精灵的数量更是雪上加霜。赛尔，行动起来，与我一起踏上搜救稀有精灵之路吧！"],["好的！让我们出发吧！"]);
               _loc2_.push(_loc3_,_loc4_);
         }
         return _loc2_;
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
