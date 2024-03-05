package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   
   public class HundredBaoBagController
   {
      
      private static const BUFFER:uint = 955;
      
      private static var _instance:com.robot.app.control.HundredBaoBagController;
       
      
      private var _isActivity:Boolean = false;
      
      private var timer:Timer;
      
      private var _taskMC:MovieClip;
      
      private var _activityTimer:CronTimeVo;
      
      private var _boxIndex:uint;
      
      private var tarMc:MovieClip;
      
      private var bloodMc:MovieClip;
      
      private var boxPlayMc:MovieClip;
      
      private var childMc:MovieClip;
      
      private var childMc2:MovieClip;
      
      private var btn:MovieClip;
      
      public function HundredBaoBagController()
      {
         this._activityTimer = new CronTimeVo("0-29","*","20-26","12","*","2013");
         super();
      }
      
      public static function get instance() : com.robot.app.control.HundredBaoBagController
      {
         return _instance = _instance || new com.robot.app.control.HundredBaoBagController();
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         MapManager.currentMap.controlLevel.addChildAt(param1,0);
         OgreController.isShow = false;
         if(BufferRecordManager.getMyState(BUFFER) == false)
         {
            this.startPreStroy();
         }
         else
         {
            this.addEvents();
            this.comeInStateAnimation();
         }
      }
      
      private function startPreStroy() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         this.mcVisible(false);
         MapManager.currentMap.controlLevel["lodManBtn"].visible = false;
         TaskDiaLogManager.single.playStory(this.stroyPreLine,function():void
         {
            BufferRecordManager.setMyState(BUFFER,true);
            KTool.showMapAllPlayerAndMonster();
            ModuleManager.showModule(ClientConfig.getAppModule("ChristmasGiftDistributePanel"));
            MapManager.currentMap.controlLevel["lodManBtn"].visible = true;
            addEvents();
            comeInStateAnimation();
         });
      }
      
      private function comeInStateAnimation() : void
      {
         if(this._activityTimer.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            this._isActivity = true;
            this._taskMC.visible = false;
            this.btn["tip"].visible = true;
            this.mcVisible(true);
            AimatController.addEventListener(AimatEvent.PLAY_END,this.onShootEndHander);
         }
         else
         {
            this._isActivity = false;
            this._taskMC.visible = true;
            this._taskMC.gotoAndStop(5);
            this.btn["tip"].visible = false;
            this.mcVisible(false);
            AimatController.removeEventListener(AimatEvent.PLAY_END,this.onShootEndHander);
         }
      }
      
      private function mcVisible(param1:Boolean) : void
      {
         (MapManager.currentMap.controlLevel["christmasTreeBtn"] as MovieClip).visible = param1;
         var _loc2_:int = 1;
         while(_loc2_ < 11)
         {
            (MapManager.currentMap.controlLevel["box" + _loc2_] as MovieClip).visible = param1;
            _loc2_++;
         }
      }
      
      private function addEvents() : void
      {
         this.btn = MapManager.currentMap.controlLevel["lodManBtn"];
         this.btn["man"].buttonMode = true;
         this.timer = new Timer(30000);
         this.timer.addEventListener(TimerEvent.TIMER,this.onTime);
         this.timer.start();
         SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,this.onError);
         this.btn["man"].addEventListener(MouseEvent.CLICK,this.onClickOpenPanelHandler);
         (MapManager.currentMap.controlLevel["christmasTreeBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onClickOpenPanelHandler);
      }
      
      protected function onTime(param1:TimerEvent) : void
      {
         this.comeInStateAnimation();
      }
      
      private function onError(param1:SocketErrorEvent) : void
      {
         this.comeInStateAnimation();
         LevelManager.openMouseEvent();
      }
      
      private function onClickOpenPanelHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChristmasGiftDistributePanel"),"礼品面板打开中...");
      }
      
      public function removeEvents() : void
      {
         SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,this.onError);
         if(this.timer)
         {
            this.timer.stop();
            this.timer.removeEventListener(TimerEvent.TIMER,this.onTime);
            this.timer = null;
         }
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onShootEndHander);
         this.btn.removeEventListener(MouseEvent.CLICK,this.onClickOpenPanelHandler);
         (MapManager.currentMap.controlLevel["christmasTreeBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onClickOpenPanelHandler);
      }
      
      private function get stroyPreLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20131220_3",true]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NIKELA,["圣诞节是我最喜欢的节日呢，每到这个节日就可以为大家派发各种各样的礼物！"],["圣诞老人最棒啦！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NIKELA,["年年都是直接拿礼物，今年我们来玩点特别的吧，吼吼！ "],["特别的？怎么个特别法？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NIKELA,["2013年度圣诞节礼物获得方法是！用抢的！ "],["。。。。。"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["圣诞老人，你什么时候变得那么爱玩了。你那个用抢的到底是什么意思呀？"],["那我现在就来给你们演示一下吧。"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC as MovieClip;
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_77_1";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
      }
      
      private function onShootEndHander(param1:AimatEvent) : void
      {
         var mc1:MovieClip;
         var mc2:MovieClip;
         var mc3:MovieClip;
         var mc4:MovieClip;
         var mc5:MovieClip;
         var mc6:MovieClip;
         var mc7:MovieClip;
         var mc8:MovieClip;
         var mc9:MovieClip;
         var mc10:MovieClip;
         var endPos:Point;
         var event:AimatEvent = param1;
         if(event.info.userID != MainManager.actorID)
         {
            return;
         }
         mc1 = MapManager.currentMap.controlLevel["box1"];
         mc2 = MapManager.currentMap.controlLevel["box2"];
         mc3 = MapManager.currentMap.controlLevel["box3"];
         mc4 = MapManager.currentMap.controlLevel["box4"];
         mc5 = MapManager.currentMap.controlLevel["box5"];
         mc6 = MapManager.currentMap.controlLevel["box6"];
         mc7 = MapManager.currentMap.controlLevel["box7"];
         mc8 = MapManager.currentMap.controlLevel["box8"];
         mc9 = MapManager.currentMap.controlLevel["box9"];
         mc10 = MapManager.currentMap.controlLevel["box10"];
         endPos = new Point(event.info.endPos.x,event.info.endPos.y);
         this._boxIndex = 0;
         if(mc1.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 1;
            this.tarMc = mc1;
         }
         else if(mc2.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 2;
            this.tarMc = mc2;
         }
         else if(mc3.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 3;
            this.tarMc = mc3;
         }
         else if(mc4.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 4;
            this.tarMc = mc4;
         }
         else if(mc5.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 5;
            this.tarMc = mc5;
         }
         else if(mc6.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 6;
            this.tarMc = mc6;
         }
         else if(mc7.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 7;
            this.tarMc = mc7;
         }
         else if(mc8.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 8;
            this.tarMc = mc8;
         }
         else if(mc9.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 9;
            this.tarMc = mc9;
         }
         else if(mc10.hitTestPoint(endPos.x,endPos.y))
         {
            this._boxIndex = 10;
            this.tarMc = mc10;
         }
         if(this._boxIndex == 0)
         {
            return;
         }
         this.tarMc.gotoAndStop(1);
         KTool.getFrameMc(this.tarMc,1,"bloodMc",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            bloodMc = mc;
            bloodMc.nextFrame();
            if(bloodMc.currentFrame == 4)
            {
               LevelManager.closeMouseEvent();
               tarMc.addFrameScript(tarMc.totalFrames - 1,function():void
               {
                  tarMc.addFrameScript(tarMc.totalFrames - 1,null);
                  tarMc.stop();
                  KTool.getFrameMc(tarMc,tarMc.totalFrames,"main",function(param1:MovieClip):void
                  {
                     boxPlayMc = param1;
                     timer.stop();
                     SocketConnection.send(CommandID.HUNDREDAOBAG_FIGHT);
                  });
               });
               tarMc.gotoAndPlay(2);
               SocketConnection.addCmdListener(CommandID.HUNDREDAOBAG_FIGHT,getGiftHandler);
            }
            else
            {
               AimatController.start(0,false,false);
            }
         });
      }
      
      private function getGiftHandler(param1:SocketEvent) : void
      {
         var byte:ByteArray;
         var index1:uint;
         var index2:uint = 0;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.HUNDREDAOBAG_FIGHT,this.getGiftHandler);
         byte = event.data as ByteArray;
         byte.position = 0;
         index1 = byte.readUnsignedInt();
         index2 = byte.readUnsignedInt();
         switch(index1)
         {
            case 1:
            case 2:
            case 3:
            case 4:
            case 6:
            case 7:
               this.boxPlayMc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  var e:Event = param1;
                  if(boxPlayMc.currentFrame == 3 && boxPlayMc["mc3"] != null)
                  {
                     boxPlayMc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     childMc = boxPlayMc["mc3"];
                     childMc.addFrameScript(childMc.totalFrames - 1,function():void
                     {
                        childMc.addFrameScript(childMc.totalFrames - 1,null);
                        childMc.stop();
                        tarMc.gotoAndStop(1);
                        LevelManager.openMouseEvent();
                        comeInStateAnimation();
                        BonusController.getDelayList().eachKey(function(param1:uint):void
                        {
                           BonusController.showDelayBonus(param1);
                           timer.start();
                        });
                     });
                     childMc.gotoAndPlay(1);
                  }
               });
               this.boxPlayMc.gotoAndStop(3);
               break;
            case 5:
               this.boxPlayMc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  var e:Event = param1;
                  if(boxPlayMc.currentFrame == 1 && boxPlayMc["mc1"] != null)
                  {
                     boxPlayMc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     childMc = boxPlayMc["mc1"];
                     KTool.getFrameMc(childMc,index2,"mc" + index2,function(param1:MovieClip):void
                     {
                        var mc:MovieClip = param1;
                        childMc2 = mc;
                        childMc2.addFrameScript(childMc2.totalFrames - 1,function():void
                        {
                           childMc2.addFrameScript(childMc2.totalFrames - 1,null);
                           childMc2.stop();
                           LevelManager.openMouseEvent();
                           FightManager.fightWithBoss("闪光精灵",index2);
                           comeInStateAnimation();
                           timer.start();
                        });
                     });
                  }
               });
               this.boxPlayMc.gotoAndStop(1);
               break;
            case 8:
               this.boxPlayMc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  var e:Event = param1;
                  if(boxPlayMc.currentFrame == 2 && boxPlayMc["mc2"] != null)
                  {
                     boxPlayMc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     childMc = boxPlayMc["mc2"];
                     childMc.addFrameScript(childMc.totalFrames - 1,function():void
                     {
                        childMc.addFrameScript(childMc.totalFrames - 1,null);
                        childMc.stop();
                        LevelManager.openMouseEvent();
                        BonusController.removeDelay(182);
                        FightManager.fightWithBoss("海盗",index2);
                        comeInStateAnimation();
                        timer.start();
                     });
                     childMc.gotoAndPlay(1);
                  }
               });
               this.boxPlayMc.gotoAndStop(2);
         }
      }
   }
}
