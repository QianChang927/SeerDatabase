package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.net.SharedObject;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class EvolveEndController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function EvolveEndController()
      {
         super();
      }
      
      public static function initMap939(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function qianzhiHandler() : void
      {
         if(!BufferRecordManager.getMyState(792))
         {
            SocketConnection.send(1022,86061979);
            MapObjectControl.hideOrShowAllObjects(false);
            KTool.hideMapAllPlayerAndMonster();
            taskMc.visible = true;
            _map.depthLevel["maidiwen"].visible = false;
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               SocketConnection.send(1022,86061980);
               _map.depthLevel["maidiwen"].visible = true;
               taskMc.visible = false;
               BufferRecordManager.setMyState(792,true);
               ModuleManager.showModule(ClientConfig.getAppModule("EvolveEndPanel"));
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster();
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("EvolveEndPanel"));
            taskMc.visible = false;
         }
      }
      
      public static function winLuSen() : void
      {
         var _loc1_:SharedObject = SOManager.getUserSO(SOManager.SHAKER_FULL_SCREEN);
         if(_loc1_.data["isPlay_evolveEndController"] == undefined)
         {
            _playMapAni();
            _loc1_.data["isPlay_evolveEndController"] = true;
            SOManager.flush(_loc1_);
            return;
         }
         EventManager.dispatchEvent(new DynamicEvent("evolveEndPlayMapAni"));
      }
      
      private static function _playMapAni() : void
      {
         _map.depthLevel["maidiwen"].visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         taskMc.visible = true;
         AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
         {
            MapObjectControl.hideOrShowAllObjects(true);
            KTool.showMapAllPlayerAndMonster();
            taskMc.visible = false;
            _map.depthLevel["maidiwen"].visible = true;
            EventManager.dispatchEvent(new DynamicEvent("evolveEndPlayMapAni"));
         });
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc9_:TaskMod = null;
         var _loc10_:TaskMod = null;
         var _loc11_:TaskMod = null;
         var _loc12_:TaskMod = null;
         var _loc13_:TaskMod = null;
         var _loc14_:TaskMod = null;
         var _loc15_:TaskMod = null;
         var _loc16_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["神宠超进化盛典已经快要闭幕了，暗黑战神联盟的危机终于要告一段落了。"],["哦，好可惜。"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSEN,["那样我岂不是见不到那些大英雄了……真是遗憾……"],["也不一定呢。"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这里毕竟是他们曾经战斗过的地方，说不定他们还会回来，你都想见到谁呢？"],["我艾辛格偏喜欢胡来。"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSEN,["太多了！龙王子哈克萨斯，皮神波斯蒂加，还有我听说尤尼卡和吉米丽娅最近也超进化了！"],["你的需求还真不少呢……"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["这里的战斗已经告一段落了，神宠们都回到了各自的家园，想把他们重新聚集起来恐怕有点难啊……"],["怎么会这样啊……"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSEN,["哎，错过了神宠超进化盛典，好可惜，不知道还有没有下次了……"],["不过也有办法。"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["既然是一场盛典，总应该有个闭幕式，也是对激烈的战斗的一个纪念，说不定可以把他们吸引回来。"],["真是个好办法！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSEN,["我一定好好筹办这场闭幕式，为超进化盛典画上一个完美的句号！"],["加油，我看好你哟！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSEN,["虽然刚刚信心满满的，不过闭幕式要怎么才能把神宠们吸引过来呢，真是一点经验都没有……"],["放心卢森，我们会帮你的。"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["美丽的烟花是庆典的必备，特别是欢庆胜利的时刻，卢森你觉得怎么样？"],["真是个好主意！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSEN,["我一定可以找到最华丽的烟花来庆祝这场伟大的胜利，献上对神宠们最崇高的敬意！"],["加油卢森！"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.conLevel["evloveEndMc"];
      }
   }
}
