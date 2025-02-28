package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.ShiHuaSummerActivity;
   import com.robot.app.mapProcess.control.SptTrialClothController;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.sptStar.LeiyiTrainController;
   import com.robot.app.task.control.TaskController_764;
   import com.robot.app.task.control.TaskController_779;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.app.task.taskscollection.Task764;
   import com.robot.app.task.taskscollection.Task779;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PeopleActionEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.ActorModel;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.media.Sound;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.ArrayUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_40 extends BaseMapProcess
   {
      
      public static var hasPlayAi:Boolean = false;
       
      
      private var _oldSpeed:Number;
      
      private var _akxyMc:MovieClip;
      
      private var _akxyNum:int = 10;
      
      private var _akxyMc1:MovieClip;
      
      private var _time:Timer;
      
      private var _shouMc:MovieClip;
      
      private var _lightMc:MovieClip;
      
      private var _bingBlockMc:MovieClip;
      
      private var _diaMc:MovieClip;
      
      private var _drawMC:MovieClip;
      
      public function MapProcess_40()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["guide_mc"].visible = false;
         this._akxyMc = conLevel.getChildByName("akxyMc") as MovieClip;
         this._akxyMc.addEventListener(MouseEvent.ROLL_OVER,this.onOverAkxy);
         this._akxyMc1 = conLevel.getChildByName("akxyMc1") as MovieClip;
         this._akxyMc1.gotoAndStop(1);
         this._akxyMc.visible = true;
         this._akxyMc1.visible = false;
         this._diaMc = conLevel.getChildByName("diaMc") as MovieClip;
         this._diaMc.visible = false;
         this._diaMc.mouseEnabled = false;
         this._shouMc = conLevel.getChildByName("shouMc") as MovieClip;
         this._shouMc.visible = false;
         SptTrialClothController.setup(this);
         ToolTipManager.add(conLevel["hit_8"],"快使用头部射击吧！");
         this._bingBlockMc = conLevel.getChildByName("bingBlockMc") as MovieClip;
         this._bingBlockMc.gotoAndStop(1);
         this._lightMc = topLevel.getChildByName("lightMc") as MovieClip;
         DisplayUtil.removeForParent(this._lightMc);
         this._oldSpeed = MainManager.actorModel.speed;
         this.onChangeCloth();
         this.cheakTask();
         MainManager.actorModel.addEventListener(PeopleActionEvent.CLOTH_CHANGE,this.onChangeCloth);
         conLevel["haidao4MC"].visible = false;
         conLevel["bulaikeMC"].visible = false;
         conLevel["leiyiMC"].visible = false;
         ShiHuaSummerActivity.initForMap40(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").init();
         if(this.isInActive)
         {
            conLevel["leiyiMC"].visible = false;
            conLevel["haidao4MC"].visible = false;
            conLevel["bulaikeMC"].visible = false;
            return;
         }
         if(TasksManager.getTaskStatus(122) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(122,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  _akxyMc.visible = false;
                  _akxyMc1.visible = true;
                  _akxyMc1.buttonMode = true;
                  _akxyMc1.addEventListener(MouseEvent.CLICK,fightBoss);
                  _akxyMc1.addEventListener(MouseEvent.ROLL_OVER,onOverAkxy);
               }
            });
         }
         if(TasksManager.getTaskStatus(TaskController_779.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            Task779.initTaskForMap40(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_764.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task764.initTaskForMap40(this);
            return;
         }
         MapListenerManager.add(depthLevel["gameBtn"],this.onGift,"冬季运动会奖励");
      }
      
      private function onGift(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86065342);
         ModuleManager.showModule(ClientConfig.getAppModule("adown/WinterGamesGuidePanel"));
      }
      
      public function hideSceneObj() : void
      {
         this._akxyMc.visible = false;
         this._akxyMc1.visible = false;
         conLevel["leiyiMC"].visible = false;
         conLevel["haidao4MC"].visible = false;
         conLevel["bulaikeMC"].visible = false;
         conLevel["SptTrialCloth"].visible = false;
      }
      
      private function get isInActive() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.monthUTC == 7 && _loc1_.dateUTC >= 10 && _loc1_.dateUTC <= 16 && _loc1_.hoursUTC >= 4 && _loc1_.hoursUTC <= 5)
         {
            return true;
         }
         return false;
      }
      
      private function fightBoss(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(TasksManager.getTaskStatus(122) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(122,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
               {
                  if(_akxyMc1.currentFrame == 1)
                  {
                     AnimateManager.playMcAnimate(_akxyMc1,0,"",function():void
                     {
                        LeiyiTrainController.initTrain_3(_akxyMc1);
                     });
                  }
                  else
                  {
                     LeiyiTrainController.initTrain_3(_akxyMc1);
                  }
               }
            });
         }
      }
      
      private function onOverAkxy(param1:MouseEvent) : void
      {
         var _loc2_:Sound = MapManager.currentMap.libManager.getSound("akxy_sound");
         _loc2_.play(0,1);
      }
      
      private function onChangeCloth(param1:Event = null) : void
      {
         if(ArrayUtil.embody(MainManager.actorInfo.clothIDs,[100087,100088,100089,100090,100091]))
         {
            MainManager.actorModel.speed = 8;
         }
         else if(Boolean(MainManager.actorModel.nono) && Boolean(MainManager.actorInfo.superNono))
         {
            MainManager.actorModel.speed = ItemXMLInfo.getSpeed(MainManager.actorInfo.clothIDs);
         }
         else
         {
            MainManager.actorModel.speed = 2;
         }
      }
      
      private function cheakTask() : void
      {
         if(TasksManager.getTaskStatus(8) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(8,function(param1:Array):void
            {
               if(param1[0])
               {
                  if(!param1[1])
                  {
                     AimatController.addEventListener(AimatEvent.PLAY_END,onAimat);
                     _shouMc.visible = true;
                  }
                  else
                  {
                     DisplayUtil.removeForParent(_akxyMc["stateMc"]);
                  }
               }
               if(param1[2])
               {
                  _diaMc.mouseEnabled = false;
               }
               else
               {
                  _diaMc.mouseEnabled = true;
                  _diaMc.visible = true;
               }
            });
         }
         else if(TasksManager.getTaskStatus(8) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(this._akxyMc["stateMc"]);
         }
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         var info:AimatInfo = e.info;
         if(info.userID != MainManager.actorID)
         {
            return;
         }
         if(conLevel["hit_8"].hitTestPoint(info.endPos.x,info.endPos.y,true))
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
            topLevel.addChild(this._lightMc);
            this._lightMc.addFrameScript(this._lightMc.totalFrames - 1,function():void
            {
               _lightMc.addFrameScript(_lightMc.totalFrames - 1,null);
               DisplayUtil.removeForParent(_lightMc);
               DisplayUtil.removeForParent(_akxyMc["stateMc"]);
               TasksManager.complete(8,1,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  if(b)
                  {
                     NpcTipDialog.show("控制芯片被打下来了，阿克西亚好像慢慢恢复了平静。",function():void
                     {
                        NpcTipDialog.show("咕咕嘎，咕咕咕咕，咕嘎嘎咕，嘎嘎噶。\n",function():void
                        {
                           Alarm.show("你得到一块晶体！",function():void
                           {
                              MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                              {
                                 var map:MapModel = null;
                                 var e:MapEvent = param1;
                                 MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                                 map = MapManager.currentMap;
                                 CommonUI.addYellowArrow(map.topLevel,643,28,30);
                                 MapManager.addEventListener(MapEvent.MAP_DESTROY,function(param1:MapEvent):void
                                 {
                                    MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
                                    CommonUI.removeYellowArrow(map.topLevel);
                                 });
                              });
                              MapManager.changeMap(43);
                           });
                           _shouMc.visible = false;
                        },NpcTipDialog.XUAN_BING_SHOU_1);
                     },NpcTipDialog.SEER);
                  }
               });
            });
            this._lightMc.gotoAndPlay(1);
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this._time.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._time.stop();
         this._time = null;
         this._bingBlockMc.gotoAndPlay(2);
         this._bingBlockMc.mouseEnabled = false;
         MainManager.actorModel.stopSpecialAct();
      }
      
      public function changeMap(param1:MovieClip) : void
      {
         var mode:ActorModel = null;
         var shape:Shape = null;
         var t:uint = 0;
         var o:MovieClip = param1;
         if(MainManager.actorInfo.actionType != 0)
         {
            return;
         }
         LevelManager.closeMouseEvent();
         mode = MainManager.actorModel;
         mode.stop();
         mode.x = o.x + o.width / 2;
         mode.y = o.y + o.height / 2;
         mode.direction = Direction.DOWN;
         shape = new Shape();
         shape.graphics.beginFill(0,0);
         shape.graphics.drawRect(0,0,200,200);
         shape.graphics.endFill();
         shape.x = mode.x - (200 - mode.width) / 2;
         shape.y = mode.y - 190;
         mode.execBehavior(new ChatBehavior("#2"));
         mode.parent.addChild(shape);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            mode.mask = shape;
            var _loc1_:* = mode.y + 200;
            TweenLite.to(mode,0.5,{
               "y":_loc1_,
               "ease":Back.easeIn,
               "onComplete":onComp
            });
         },2000);
      }
      
      private function onComp() : void
      {
         var _loc1_:ActorModel = MainManager.actorModel;
         _loc1_.mask = null;
         LevelManager.openMouseEvent();
         MapManager.changeMap(42);
      }
      
      public function getDia() : void
      {
         TasksManager.complete(8,2,function(param1:Boolean):void
         {
            if(param1)
            {
               _diaMc.visible = false;
               _diaMc.mouseEnabled = false;
               Alarm.show("你得到一块晶体！");
            }
         });
      }
      
      public function onAkxy() : void
      {
         if(MapManager.currentMap.id == 40)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightBossController.fightBoss("阿克希亚");
            SptTrialClothController.bossName = "阿克希亚";
         }
      }
      
      public function onShouHit() : void
      {
         NpcTipDialog.show("咕嘎！咕咕咕咕！咕嘎咕嘎。\n（就是你们海盗，把阿克希亚害成这样！）",function():void
         {
            NpcTipDialog.show("我是赛尔号的" + TextFormatUtil.getRedTxt(MainManager.actorInfo.nick) + "，跟着求救信号找来的。你说的海盗是不是独眼的，紫色的？",function():void
            {
               NpcTipDialog.show("咕咕！咕咕咕咕！咕嘎咕嘎。\n（是的，这么说你不是海盗，如果你能帮忙让阿克希亚平静下来我就相信你。）",function():void
               {
                  NpcTipDialog.show("我的" + TextFormatUtil.getRedTxt("激光") + "能量还不够大，要找面能" + TextFormatUtil.getRedTxt("反光的物体") + "来反射加强！",null,NpcTipDialog.SEER);
               },NpcTipDialog.XUAN_BING_SHOU_3);
            },NpcTipDialog.SEER);
         },NpcTipDialog.XUAN_BING_SHOU_2);
      }
      
      public function onBingBlockHit() : void
      {
         if(MainManager.actorInfo.clothIDs.indexOf(100014) == -1)
         {
            Alarm.show("矿石挖掘需要专业的" + TextFormatUtil.getRedTxt("钻头") + "，若你已从赛尔飞船" + TextFormatUtil.getRedTxt("机械室") + "找到它，快把它装备上吧！");
            return;
         }
         MainManager.actorModel.stop();
         DepthManager.bringToTop(MainManager.actorModel);
         MainManager.actorModel.specialAction(100014);
         this._time = new Timer(10 * 1000);
         this._time.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._time.start();
      }
      
      override public function destroy() : void
      {
         MainManager.actorModel.removeEventListener(PeopleActionEvent.CLOTH_CHANGE,this.onChangeCloth);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").destroy();
         this._lightMc.addFrameScript(this._lightMc.totalFrames - 1,null);
         Task779.destroy();
         Task764.destroy();
         MainManager.actorModel.speed = this._oldSpeed;
         if(this._time)
         {
            this._time.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._time.stop();
            this._time = null;
         }
         this._akxyMc.removeEventListener(MouseEvent.CLICK,this.fightBoss);
         this._akxyMc.removeEventListener(MouseEvent.ROLL_OVER,this.onOverAkxy);
         this._akxyMc1.removeEventListener(MouseEvent.ROLL_OVER,this.onOverAkxy);
         this._akxyMc1.removeEventListener(MouseEvent.CLICK,this.fightBoss);
         this._akxyMc = null;
         this._diaMc = null;
         this._shouMc = null;
         this._lightMc = null;
         this._bingBlockMc = null;
         SptTrialClothController.destroy();
         ShiHuaSummerActivity.destroy();
      }
   }
}
