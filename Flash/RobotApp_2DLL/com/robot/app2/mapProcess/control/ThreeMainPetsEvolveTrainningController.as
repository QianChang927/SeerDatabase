package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class ThreeMainPetsEvolveTrainningController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function ThreeMainPetsEvolveTrainningController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         if(BufferRecordManager.getMyState(1104))
         {
            showPanel();
         }
         else
         {
            playPreStory();
         }
      }
      
      private static function playPreStory() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_981_0"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMC = mc;
            taskMC.x = 233.4;
            taskMC.y = 52.9;
            _map.btnLevel.addChild(taskMC);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            TaskDiaLogManager.single.playStory(prevStroy,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               showPanel();
               BufferRecordManager.setMyState(1104,true);
            });
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGNALISHA,["元素法师已经悔过了，这下整个宇宙都太平了！"],["没有那么简单吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSIWANG_ENVO,["感觉泰坦星系的能量蠢蠢欲动，我猜想应该会有什么事情发生！"],["真是聪明啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHIYANJINGANG,["是谁？是谁在说话？大家小心，来者不善！"],["呵！都超进化了呢！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["斯凯尔，你终于出现了！"],["你未免太急了吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["魔灵王，蛰伏了这么久，终于再次出现，想必也是为了得到卡修斯超进化的能量吧！"],["哼！灵兽之尊名不虚传！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["既然已经知道了，就不用我再说一遍了！超进化的能量到底在哪里？"],["你根本不配拥有！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["你以为让他们三个超进化的家伙拥有特性，就能够抵抗我吗？"],["可恶！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGNALISHA,["不试试又怎么知道呢！别太自大！"],["接招吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["够了，魔灵王！你不就是想要拥有卡修斯超进化的能量吗？我告诉你就好了！"],["不要！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGNALISHA,["如果让整个邪恶的家伙得到超进化的能量，宇宙一定又要遭受一场浩劫！"],["没关系的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["卡修斯受命于天，超进化的能量来自于天神、地祇、山岳的能量，但是三种能量无法彻底激发卡修斯，还需要……"],["还需要什么？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["我也不知道！这也是自上古以来，我始终未能参透的奥秘！"],["哼！那就让我来参透吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSIWANG_ENVO,["师尊，魔灵王能够参透卡修斯超进化的奥秘吗？"],["一切都是天意！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["但愿卡修斯能够尽快苏醒，早日完成超进化的封神之路！"],["那我们该怎么办？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["我们不能坐以待毙，必须加快特训！只有得到专属特性，才能够有足够的实力对抗魔灵王！"],["遵命，师尊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc"]));
         return _loc1_;
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ThreeMainPetsIvolveMainPanel"),"正在打开");
      }
      
      public static function destroy() : void
      {
         _taskMc = null;
         _map = null;
      }
   }
}
