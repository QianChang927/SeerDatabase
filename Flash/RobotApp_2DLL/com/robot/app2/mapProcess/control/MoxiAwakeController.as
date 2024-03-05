package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MoxiAwakeController
   {
      
      private static const PRE_TASK:int = 1871;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _isCatchSuccess:Boolean = false;
      
      private static var _fightType:String;
       
      
      public function MoxiAwakeController()
      {
         super();
      }
      
      public static function getCaptime(param1:Function = null) : void
      {
         var func:Function = param1;
         PetManager.upDate(function():void
         {
            var _loc1_:PetListInfo = null;
            for each(_loc1_ in PetManager.getBagMap())
            {
               if(_loc1_.id == 2059 || _loc1_.id == 2060)
               {
                  func(_loc1_.catchTime);
                  return;
               }
            }
            func(0);
         });
      }
      
      public static function getPetCount() : int
      {
         var _loc2_:PetListInfo = null;
         var _loc1_:int = 0;
         for each(_loc2_ in PetManager.getBagMap())
         {
            if(_loc2_.id == 2059 || _loc2_.id == 2060)
            {
               _loc1_++;
            }
         }
         for each(_loc2_ in PetManager.getStorage())
         {
            if(_loc2_.id == 2059 || _loc2_.id == 2060)
            {
               _loc1_++;
            }
         }
         return _loc1_;
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         SocketConnection.send(1022,86065970);
         _map = param1;
         checkPreTask();
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatch);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private static function onCatch(param1:PetFightEvent) : void
      {
         _isCatchSuccess = true;
         onFightOver(null);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(_fightType == "haidao")
         {
            return;
         }
         SocketConnection.send(1022,86065974);
         if(_isCatchSuccess)
         {
            NpcDialog.show(NPC.MOXI,["莫西家族是可以极速觉醒的！只要有足够的觉醒石，就能够极速塑造极品的莫西尼！试试吧！"],["塑造极品精灵！","继续收集觉醒石！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MoxiAwakeMainPanel"));
            }]);
         }
         else
         {
            NpcDialog.show(NPC.MOXI,["哈哈！捕捉失败啦！继续捕捉，0xff0000第五次0xffffff必定成功哦！"],["我去打海盗！","休息一会儿！"],[function():void
            {
               fight("haidao");
            }]);
         }
      }
      
      private static function checkPreTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_966_moxi_awake"),function(param1:MovieClip):void
         {
            taskMc = param1;
            taskMc.buttonMode = true;
            _map.conLevel.addChild(taskMc);
            if(TasksManager.getTaskStatus(PRE_TASK) != TasksManager.COMPLETE)
            {
               startPreTask(showBoss);
            }
            else
            {
               showBoss();
            }
         });
      }
      
      private static function showBoss() : void
      {
         KTool.getLimitNum(12043,function(param1:int):void
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            if(param1 < 20)
            {
               CommonUI.addYellowArrow(_map.topLevel,303,201,330);
            }
         });
         taskMc.gotoAndStop(5);
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name == "haidao")
         {
            SocketConnection.send(1022,86065975);
            KTool.getLimitNum(12043,function(param1:int):void
            {
               var value:int = param1;
               if(value < 20)
               {
                  NpcDialog.show(NPC.ALLISON,["哈哈哈！我不会给你觉醒石！有本事来抢啊！"],["我要挑战你！"],[function():void
                  {
                     fight("haidao");
                  }]);
               }
               else
               {
                  Alarm.show("今日挑战次数已达上限，明天再来吧！");
               }
            });
         }
      }
      
      public static function fight(param1:String) : void
      {
         if(param1 == "haidao")
         {
            _fightType = "haidao";
            FightManager.fightNoMapBoss("海盗",248);
         }
         else if(param1 == "moxi")
         {
            _fightType = "moxi";
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(taskMc)
            {
               DisplayUtil.removeForParent(taskMc);
               taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
               _taskMc = null;
            }
            _map = null;
         }
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatch);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private static function startPreTask(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         SocketConnection.send(1022,86065971);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.MOXINI,["是一堆铁皮！喂！我是创世之神！你们是谁？"],["唉呀妈呀！"]]],[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["这是哪儿啊！吃着火锅唱着歌，一不小心就被扯来了这里！"],["回答我！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOXINI,["你们是谁？快回答我！我可是创世之神！"],["我…我们是……"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["总算是进来了！"],["是海盗！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["海盗集团！你们怎么会在这里！"],["我要是知道就好了！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["莫名其妙，谁愿意来这个破地方！"],["什么叫破地方？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["快看！从他身上拿下来的！结果他就变小了！"],["还给我！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOXI,["那是我的觉醒石！没有它，我的力量就会变得很弱小"],["觉醒石？"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["欺负弱小！我盖亚可不允许！"],["我来帮你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["可恶的海盗！看我给你们点颜色看看！"],["怕你不成？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["我就喜欢看到精灵变得弱小！这样我们就是老大！"],["帮帮我！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOXI,["只要拿到觉醒石，我就能够快速成长！变成强力精灵！你们会帮助我吗？"],["放心吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.accept(PRE_TASK,function(param1:Boolean):void
            {
               var b1:Boolean = param1;
               TasksManager.complete(PRE_TASK,0,function(param1:Boolean):void
               {
                  KTool.showMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(true);
                  SocketConnection.send(1022,86065972);
                  ModuleManager.showModule(ClientConfig.getAppModule("MoxiAwakeMainPanel"));
                  if(null != cb)
                  {
                     cb();
                  }
               });
            });
         };
         storyPlayer.start();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
   }
}
