package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class ChuangShiShenBingController
   {
      
      private static const BUFFER_ID:uint = 860;
      
      private static var _instance:com.robot.app.control.ChuangShiShenBingController;
       
      
      private var _taskMC:MovieClip;
      
      public function ChuangShiShenBingController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.ChuangShiShenBingController
      {
         return _instance = _instance || new com.robot.app.control.ChuangShiShenBingController();
      }
      
      public function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
      
      public function start() : void
      {
         SocketConnection.send(1022,86063436);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_966_140811"),function(param1:MovieClip):void
         {
            var taskMcs:MovieClip = param1;
            _taskMC = taskMcs;
            MapManager.currentMap.controlLevel.addChild(_taskMC);
            if(BufferRecordManager.getMyState(BUFFER_ID) == true)
            {
               KTool.showMapPlayerAndMonster();
               taskMC.gotoAndStop(4);
            }
            else
            {
               SocketConnection.send(1022,86063437);
               KTool.hideMapAllPlayerAndMonster();
               TaskDiaLogManager.single.playStory(stroyLine,function():void
               {
                  SocketConnection.send(1022,86063438);
                  taskMC.gotoAndStop(4);
                  BufferRecordManager.setMyState(BUFFER_ID,true);
                  KTool.showMapAllPlayerAndMonster();
               });
            }
            addEvents();
         });
      }
      
      public function playAllWinStory() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZERUILA,["双子星精灵的确实力超凡！这里是凝神冰魄，快拿去解救肯巴莱塔吧。记得带我向这个老朋友问好！"],["谢谢你！我们一定会的！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["进入第六星系，需要寻找到5位至纯至真的精灵相伴！你愿意与我们一同前往吗？"],["第六星系？一同前往！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZERUILA,["我千年都守护在这里，对于第六星系不感兴趣。而且我不确定自己的实力能不能够帮你们！"],["让我们重新来过！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["我们再来看看你的实力！时空漩涡！"],["这是……"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["你是否愿意同我们一起回到过去？我会送你丰厚的奖励。泽瑞拉他日必定能够成为宇宙新的强力精灵！"],["这是……"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            NpcDialog.show(NPC.SHENGYIZHILING,["你是否愿意同我们一起回到过去？我会送你丰厚的奖励。泽瑞拉他日必定能够成为宇宙新的强力精灵！"],["我愿意，会有丰厚奖励的！","我不愿意，我不在乎！"],[function():void
            {
               TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,6,"mc6"])],function():void
               {
                  _taskMC.gotoAndStop(4);
               });
            },function():void
            {
               _taskMC.gotoAndStop(4);
               ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"),"正在努力加载创世神兵的踪迹中....");
            }]);
         });
      }
      
      public function playSingleWWinStory() : void
      {
         TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZERUILA,["实力的确不凡。可是我可不会轻易认输！你还能用不同属性的精灵击败我其他的能力吗？"],["那有什么不能！"])],function():void
         {
            _taskMC.gotoAndStop(4);
         });
      }
      
      public function playLossStory() : void
      {
         TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZERUILA,["很遗憾，凝神冰魄是世间圣物，不能轻易送给你们！请回去继续修炼吧！"],["我们不会放弃的！"])],function():void
         {
            _taskMC.gotoAndStop(4);
         });
      }
      
      private function addEvents() : void
      {
         MapListenerManager.add(this._taskMC,this.onMouseClickHandler);
      }
      
      private function onMouseClickHandler(param1:MouseEvent) : void
      {
         if(BufferRecordManager.getMyState(BUFFER_ID) == false)
         {
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("ChuangShiShenBingPanel"),"正在努力加载创世神兵的踪迹中....");
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["看来我们的确找对了！肯迪特，这里就是蕴藏着凝神冰魄的冰雪之城。他应该就是泽瑞拉！"],["凝神冰魄？泽瑞拉？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["泽瑞拉是千年冰兽。他守护者凝神冰魄，据说凝神冰魄可以消除所有的暗黑能量。有了凝神冰魄，肯巴莱塔恢复能力指日可待。"],["太棒了！我就去找他要！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KENDITE,["小心！不要轻举妄动！"],["什么？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZERUILA,["实力的确不凡。我劝你们趁早离开这里，以免我伤害你们。"],["我们是用来救精灵的！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们的好朋友受到异界能量的侵扰，据说凝神冰魄可以消除这股能量，求求你，救救双子星精灵！"],["慢着！是双子星精灵？"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["啊？难道你们认识吗？肯巴莱塔为了救双子星精灵，耗尽了自己的能量，现在亟需恢复啊！ "],["看来是故人来了！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZERUILA,["可凝神冰魄是世间圣物，不能轻易送给你们！除非你们选用四种不同属性的精灵分别击败我的四种能力。只有胜者才能拿走圣物。 "],["那我们就试试吧！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_];
      }
   }
}
