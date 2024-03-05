package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class HuoDiErController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function HuoDiErController()
      {
         super();
      }
      
      public static function initMap98(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
      
      public static function clickNpc() : void
      {
         if(MapManager.currentMap.id != 98 && !BitBuffSetClass.getState(22435))
         {
            MapManager.changeMap(98);
            return;
         }
         if(!BitBuffSetClass.getState(22435))
         {
            SocketConnection.send(1022,86073018);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            if(_map.conLevel["kaxiusiMc"])
            {
               _map.conLevel["kaxiusiMc"].visible = false;
            }
            TaskDiaLogManager.single.playStory(playDialog(1),function():void
            {
               BitBuffSetClass.setState(22435,1);
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               ModuleManager.showModule(ClientConfig.getAppModule("HuoDiErPanel"));
               TaskDiaLogManager.single.destroy();
               SocketConnection.send(1022,86073019);
               if(_map.conLevel["kaxiusiMc"])
               {
                  _map.conLevel["kaxiusiMc"].visible = true;
               }
            },"huodierMapAni",true,true);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HuoDiErPanel"));
         }
      }
      
      private static function playDialog(param1:int) : Array
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
         var _loc17_:TaskMod = null;
         var _loc18_:TaskMod = null;
         var _loc2_:Array = [];
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你……你也是炫彩神殿的守护者？"],["正是！"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUODIER,["我乃是蓝凝星神——霍迪尔！奉命召唤卡修斯成功苏醒！成功获得超进化的能量！"],["你们得不到了！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["卡修斯根本不可能获得超进化的能量！天地能量只能被我控制！"],["是谁？"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["kaxiusiJiHuoItemAni",true]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUODIER,["竟然敢来炫彩神殿挑衅，这次我绝对不会放过你！"],["霍迪尔愤怒了！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["恶灵兽，你这个大魔王！休想阻止卡修斯超进化！我会用我的身体阻挡你们的！"],["呵。笑话！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["你以为现在还有谁能够阻挡我们吗？我想要得到的东西，从来没有得不到！"],["放马过来吧！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUODIER,["我不摧毁你，你回去吧！你不要再想着卡修斯超进化的能量！它不属于你！"],["可恶！"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["魔灵王绝对不会放过你的！哼！"],["竟然是魔灵王？"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["蓝凝星神，你认识魔灵王！"],["是的！"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUODIER,["他曾经是宇宙的大魔头，没想到如今重现，竟然恶灵兽都变成他的手下，未来一定会引起巨大的灾难的！"],["那怎么办？"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUODIER,["你一定要帮助卡修斯成功完成封神之路！拜托啦！"],["放心吧，我一定会的！"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         return null;
      }
   }
}
