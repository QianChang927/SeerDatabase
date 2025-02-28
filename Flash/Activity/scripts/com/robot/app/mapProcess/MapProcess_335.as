package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.FitmentAction;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dayGift.DayGiftController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.GamePlatformEvent;
   import com.robot.core.info.task.CateInfo;
   import com.robot.core.info.task.DayTalkInfo;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.net.URLRequest;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import gs.easing.Bounce;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_335 extends BaseMapProcess
   {
      
      private static var _elevatorSwitch:Boolean = false;
      
      private static var _sound:Sound;
       
      
      private var seerMC:MovieClip;
      
      private var ligthSwitch:MovieClip;
      
      private var mosterMC:MovieClip;
      
      private var canHitMoster:Boolean = true;
      
      private var canHitMoster1:Boolean = false;
      
      private var count:uint = 0;
      
      public function MapProcess_335()
      {
         super();
      }
      
      private function seerHitLight() : void
      {
         var _loc4_:MovieClip = null;
         var _loc5_:Point = null;
         var _loc1_:Point = this.seerMC.localToGlobal(new Point());
         var _loc2_:Number = 0;
         if(_loc1_.x > 450)
         {
            _loc2_ = 650;
         }
         else
         {
            _loc2_ = 120;
         }
         var _loc3_:uint = 0;
         while(_loc3_ < 3)
         {
            if(_loc4_ = animatorLevel["laser_light"]["mc" + _loc3_]["mc"])
            {
               _loc5_ = _loc4_.localToGlobal(new Point());
               if(Math.abs(_loc1_.x - _loc5_.x) < 30)
               {
                  if(this.seerMC.hitTestObject(_loc4_))
                  {
                     DebugTrace.show("hit...");
                     MainManager.actorModel.stop();
                     LevelManager.closeMouseEvent();
                     TweenLite.to(MainManager.actorModel,0.3,{
                        "x":_loc2_,
                        "ease":Bounce.easeOut
                     });
                     TweenLite.to(this.seerMC,0.5,{
                        "alpha":0.2,
                        "ease":Bounce.easeOut,
                        "onComplete":this.onComp
                     });
                  }
                  else if(Point.distance(_loc1_,_loc5_) < 30)
                  {
                     LevelManager.closeMouseEvent();
                     TweenLite.to(MainManager.actorModel,0.3,{
                        "x":_loc2_,
                        "ease":Bounce.easeOut
                     });
                     TweenLite.to(this.seerMC,0.5,{
                        "alpha":0.2,
                        "ease":Bounce.easeOut,
                        "onComplete":this.onComp
                     });
                  }
                  this.playSound("light");
               }
            }
            _loc3_++;
         }
      }
      
      private function onComp() : void
      {
         LevelManager.openMouseEvent();
         TweenLite.to(this.seerMC,0.3,{
            "alpha":1,
            "ease":Bounce.easeOut
         });
      }
      
      private function onFrameHandler(param1:Event) : void
      {
         this.seerHitLight();
      }
      
      override protected function init() : void
      {
         this.conLevel["giftMc"].buttonMode = true;
         this.conLevel["giftMc"].addEventListener(MouseEvent.CLICK,this.onGiftHandler);
         ToolTipManager.add(conLevel["giftMc"],"高空塔传送器领取");
         this.seerMC = BasePeoleModel(MainManager.actorModel.sprite).skeleton.getSkeletonMC();
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimatHandler);
         topLevel.addEventListener(Event.ENTER_FRAME,this.onFrameHandler);
         this.ligthSwitch = conLevel["light_switch"];
         this.ligthSwitch.buttonMode = true;
         ToolTipManager.add(this.ligthSwitch,"灯光开关");
         this.ligthSwitch.addEventListener(MouseEvent.CLICK,this.onLightSwitchClick);
         animatorLevel["light_mc1"].gotoAndStop(1);
         this.mosterMC = animatorLevel["moster_mc"];
         this.mosterMC.gotoAndStop(1);
         if(TasksManager.getTaskStatus(116) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(116);
            this.canHitMoster = true;
         }
         else if(TasksManager.getTaskStatus(116) == TasksManager.COMPLETE)
         {
            this.canHitMoster = false;
            conLevel["moster_mc"].visible = false;
            AnimateManager.playMcAnimate(this.mosterMC,3,"mc111",function():void
            {
            },true);
         }
         else
         {
            this.canHitMoster = true;
         }
         animatorLevel["nono"].visible = false;
      }
      
      private function playSound(param1:String) : void
      {
         _sound = new Sound();
         _sound.load(new URLRequest(ClientConfig.getResPath("music/" + param1 + ".mp3")));
         _sound.play();
      }
      
      private function onGiftHandler(param1:MouseEvent) : void
      {
         this.conLevel["giftMc"].removeEventListener(MouseEvent.CLICK,this.onGiftHandler);
         FitmentAction.buyItem(500628,false);
      }
      
      private function onLightSwitchClick(param1:MouseEvent) : void
      {
         var _loc2_:DayGiftController = null;
         topLevel["light_mc"].gotoAndStop(2);
         animatorLevel["light_mc1"].gotoAndStop(2);
         if(this.getAward())
         {
            _loc2_ = new DayGiftController(2058,6);
            _loc2_.addEventListener(DayGiftController.COUNT_SUCCESS,this.onCountSuccess);
            _loc2_.getCount();
         }
         conLevel["light_switch"].visible = false;
         this.playSound("lightswitch");
      }
      
      private function onAimatHandler(param1:AimatEvent) : void
      {
         var p:Point;
         var id:uint;
         var mc:MovieClip = null;
         var e:AimatEvent = param1;
         if(MainManager.actorID != e.info.userID)
         {
            return;
         }
         p = e.info.endPos;
         id = uint(e.info.id);
         if(this.canHitMoster && this.canHitMoster1)
         {
            if(this.mosterMC.hitTestPoint(p.x,p.y))
            {
               ++this.count;
               this.playSound("headhit");
               if(MainManager.actorInfo.superNono)
               {
                  MainManager.actorModel.hideNono();
                  animatorLevel["nono"].visible = true;
                  mc = animatorLevel["nono"]["nonosuit"];
                  DisplayUtil.FillColor(mc,MainManager.actorInfo.nonoColor);
                  AnimateManager.playMcAnimate(animatorLevel["nono"],0,"nonomc",function():void
                  {
                     if(count == 1)
                     {
                        mosterMC.gotoAndStop(2);
                     }
                     else if(count == 3)
                     {
                        playSound("glassdie");
                        conLevel["moster_mc"].visible = false;
                        canHitMoster = false;
                        NpcDialog.show(NPC.SUPERNONO,["#2那个家伙就在不远处！你可要小心……他是海盗头目的精灵！！！"],["它是谁"],[function():void
                        {
                           AnimateManager.playMcAnimate(mosterMC,3,"mc111",function():void
                           {
                              playSound("batsound");
                              AnimateManager.playMcAnimate(topLevel["bat_mc"],0,"",function():void
                              {
                                 TasksManager.complete(116,0,function():void
                                 {
                                 });
                              });
                           });
                        }]);
                     }
                     MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
                     animatorLevel["nono"].visible = false;
                  });
               }
               else if(this.count == 5)
               {
                  this.mosterMC.gotoAndStop(2);
               }
               else if(this.count == 10)
               {
                  this.playSound("glassdie");
                  conLevel["moster_mc"].visible = false;
                  this.canHitMoster = false;
                  NpcDialog.show(NPC.SUPERNONO,["#2那个家伙就在不远处！你可要小心……他是海盗头目的精灵！！！"],["它是谁"],[function():void
                  {
                     AnimateManager.playMcAnimate(mosterMC,3,"mc111",function():void
                     {
                        playSound("batsound");
                        AnimateManager.playMcAnimate(topLevel["bat_mc"],0,"",function():void
                        {
                           TasksManager.complete(116,0,function():void
                           {
                           });
                        });
                     });
                  }]);
               }
            }
         }
      }
      
      private function onCountSuccess(param1:Event) : void
      {
         var event:Event = param1;
         var gift:DayGiftController = event.currentTarget as DayGiftController;
         gift.sendToServer(function(param1:DayTalkInfo):void
         {
            var _loc2_:CateInfo = null;
            var _loc3_:uint = 0;
            var _loc4_:uint = 0;
            for each(_loc2_ in param1.outList)
            {
               _loc3_ = uint(_loc2_.id);
               _loc4_ = uint(_loc2_.count);
               ItemInBagAlert.show(_loc3_,_loc4_ + "个<font color=\'#ff0000\'>" + ItemXMLInfo.getName(_loc3_) + "</font>已经放入你的储存箱中");
            }
         });
      }
      
      override public function destroy() : void
      {
         this.conLevel["giftMc"].removeEventListener(MouseEvent.CLICK,this.onGiftHandler);
         ToolTipManager.remove(conLevel["giftMc"]);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatHandler);
         topLevel.removeEventListener(Event.ENTER_FRAME,this.onFrameHandler);
         ToolTipManager.remove(this.ligthSwitch);
         this.ligthSwitch = null;
         this.seerMC = null;
      }
      
      private function getAward() : Boolean
      {
         var _loc1_:Number = 10 * Math.random();
         if(_loc1_ < 2)
         {
            return true;
         }
         return false;
      }
      
      public function onMosterClick() : void
      {
         if(MainManager.actorInfo.superNono)
         {
            NpcDialog.show(NPC.SUPERNONO,["NoNo……主人！快看那个精灵在器皿里奄奄一息了！快用头部射击！"],["好！我们一起加油！"],[]);
         }
         else
         {
            NpcDialog.show(NPC.NONO,["( ⊙ o ⊙ )！！快看这个里面是什么精灵？这里难道是海盗们的精灵研究室？快用头部射击击打器皿救出精灵吧！"],["好！我们一起加油！"],[]);
         }
      }
      
      public function onswitchClickHandler() : void
      {
         DebugTrace.show("触发阀门开关。。。");
         GamePlatformManager.join("LineDecordGame",true,2,null,false);
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_WIN,function(param1:GamePlatformEvent):void
         {
            var evt:GamePlatformEvent = param1;
            GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_WIN,arguments.callee);
            if(evt.gameIndex == 0)
            {
               canHitMoster1 = true;
               animatorLevel["switch_mc"].gotoAndStop(2);
               playSound("yellowopen");
               AnimateManager.playMcAnimate(animatorLevel["switch_mc"],2,"mc",function():void
               {
                  DisplayUtil.removeForParent(typeLevel["roadblock_mc"]);
                  MapManager.currentMap.makeMapArray();
               });
            }
         });
      }
      
      public function onElevatorClickHandler1() : void
      {
         var t:uint = 0;
         if(MainManager.actorInfo.superNono)
         {
            animatorLevel["switch_mc"].gotoAndStop(2);
            MainManager.actorModel.visible = false;
            t = setTimeout(function():void
            {
               MainManager.actorModel.visible = true;
               MainManager.actorModel.x = 660;
               MainManager.actorModel.y = 400;
               clearTimeout(t);
            },200);
         }
         else
         {
            Alarm.show("下面太危险了，只有在超能NoNo的保护下，你才可以进入哟！ ");
         }
      }
      
      public function onElevatorClickHandler0() : void
      {
         Alarm.show("电源尚未启动，请插入匹配的芯片，寻找电源开关吧！");
      }
      
      public function onElevatorClickHandler() : void
      {
         DebugTrace.show("触发电梯开关。。。");
         GamePlatformManager.join("CardDecodeGame");
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_WIN,function(param1:GamePlatformEvent):void
         {
            var evt:GamePlatformEvent = param1;
            GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_WIN,arguments.callee);
            if(evt.gameIndex == 1)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("elevatorEffect"),function():void
               {
                  animatorLevel["elevator_switch"].gotoAndStop(2);
                  MainManager.actorModel.x = 840;
                  MainManager.actorModel.y = 220;
               });
            }
         });
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_LOST,function(param1:GamePlatformEvent):void
         {
            GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_LOST,arguments.callee);
            DebugTrace.show(param1.gameIndex + " 号游戏失败！");
         });
      }
   }
}
