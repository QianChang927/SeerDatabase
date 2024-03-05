package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EternalKingReviveController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function EternalKingReviveController()
      {
         super();
      }
      
      public static function initMap983(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("IvokeEternalKingMainPanel"),"正在努力打开面板...");
      }
      
      public static function playStory() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_983_4"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMC = mc;
            _map.btnLevel.addChild(taskMC);
            KTool.hideMapAllPlayerAndMonster();
            _map.depthLevel.visible = false;
            setMapKingVisible(false);
            TaskDiaLogManager.single.playStory(prevStroy,function():void
            {
               _map.depthLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               DisplayUtil.removeForParent(taskMC);
               setMapKingVisible(true);
               TasksManager.complete(1985,0,function():void
               {
                  showPanel();
               });
            });
         });
      }
      
      private static function setMapKingVisible(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            MovieClip(_map.conLevel["mc_" + _loc2_]).visible = param1;
            _loc2_++;
         }
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "20140418_shilaimu";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOLUONAER,["这个废物也敢出来，哈哈哈！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["哈哈哈，全是废物！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["好了，开始办正事吧！永恒石就在那里！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc3_,true]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["大家没事吧！？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没事没事……"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUDUSHILAIMU,["恐怕我们不行了……"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TILISHILAIMU,["不过国王成功复活了，永恒石也保住了。我们可以安心了。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["可恶，还是被他们抢走了一个永恒石碎片。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可恶，那帮大坏蛋。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["我一定要想办法拿回来！"],null));
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         _map = null;
         taskMC = null;
      }
   }
}
