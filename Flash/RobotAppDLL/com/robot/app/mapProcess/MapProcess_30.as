package com.robot.app.mapProcess
{
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.task.taskscollection.Task1221;
   import com.robot.app.task.taskscollection.Task771;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.Sprite;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_30 extends BaseMapProcess
   {
       
      
      private var aliceMc:Sprite;
      
      private var bombGameMc:AppModel;
      
      public function MapProcess_30()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolTipManager.add(conLevel["cubeMc"],"拆弹游戏");
         Task1221.initForMap30(this);
         SocketConnection.send(1022,86050048);
         Task771.initTaskForMap30(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.RealHelkStarChaseSipaiController").initMap30(this);
      }
      
      override public function destroy() : void
      {
         if(this.bombGameMc)
         {
            this.bombGameMc = null;
         }
         ToolTipManager.remove(conLevel["cubeMc"]);
         Task1221.destroy();
         Task771.destory();
         getDefinitionByName("com.robot.app2.mapProcess.control.RealHelkStarChaseSipaiController").destroyMap30();
      }
      
      public function onBombGameHandler() : void
      {
         MapManager.removeAppArrow();
         if(TasksManager.getTaskStatus(9) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(9,this.onCompleteHandler);
            return;
         }
         this.onCompleteHandler(true);
      }
      
      private function onCompleteHandler(param1:Boolean) : void
      {
         if(param1)
         {
            if(!this.bombGameMc)
            {
               this.bombGameMc = new AppModel(ClientConfig.getGameModule("BombGame"),"正在打开拆弹游戏");
               this.bombGameMc.setup();
            }
            GameStorageManager.freshLastGame(41006);
            this.bombGameMc.show();
         }
      }
   }
}
