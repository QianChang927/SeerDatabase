package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SocratesProphecyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function SocratesProphecyController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SocratesProphecyPanel"),"正在努力打开面板...");
      }
      
      public static function playStory() : void
      {
         var onMapChange:Function = null;
         if(!BitBuffSetClass.getState(22516))
         {
            if(MapManager.currentMap.id == 108)
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("map_108_0"),function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  taskMC = mc;
                  _map.btnLevel.addChild(taskMC);
                  KTool.hideMapAllPlayerAndMonster();
                  _map.depthLevel.visible = false;
                  TaskDiaLogManager.single.playStory(prevStroy,function():void
                  {
                     _map.depthLevel.visible = true;
                     KTool.showMapAllPlayerAndMonster();
                     DisplayUtil.removeForParent(taskMC);
                     BitBuffSetClass.setState(22516,1,function():void
                     {
                        showPanel();
                     });
                  });
               });
            }
            else
            {
               onMapChange = function(param1:*):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
                  playStory();
               };
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
               MapManager.changeMap(108);
            }
         }
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["你就是赛尔吧，请马上报告你的指挥官，潘多拉已经蛊惑了很多宇宙中的精灵作为内应，准备毁灭整个宇宙！"],["潘多拉是谁？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["潘多拉来自冥界，是世间一切灾难、浩劫的始作俑者。赛尔们与魔界的大战惊动了冥界的潘多拉，她比魔王更凶残、比邪灵更狡猾，比你们之前所面对的敌人都要强大得多！"],["真的？我不能这样就相信你了。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["我是预言家苏哥拉底，来自遥远的虚空，曾经有许许多多的精灵在我门下学习占卜之术。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["恕我冒昧，可是，我从未听说过宇宙中的预言家。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["哈哈哈，你们最近在和魔界作战吧？"],["是的，你怎么知道……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["我虽然没有亲眼所见，但是我能感受到其中剧烈的能量波动。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["最近冥界的能量波动异常活跃，令我不安，所以我来找你们。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["你们能够对抗魔界，使我相信，你们代表着宇宙中的正义力量，所以对抗冥界你们责无旁贷。"],["我相信你说的话，最近确实有许多冥界的消息。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["那么，预言家，有什么具体的消息呢？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUGELADI,["潘多拉已经蛊惑了很多宇宙中的精灵作为内应，我可以拼凑出一些线索，需要你们找到它们，打破潘多拉施加在它们身上的法术！"],[" 没问题！"]));
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         _map = null;
         taskMC = null;
      }
   }
}
