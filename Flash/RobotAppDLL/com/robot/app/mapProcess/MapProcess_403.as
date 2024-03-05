package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskscollection.Task142;
   import com.robot.app.task.tc.TaskClass_146;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.TaomeeManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_403 extends BaseMapProcess
   {
      
      public static var qingLongStatus:int;
       
      
      private var _petArr:Array;
      
      private var _boss:MovieClip;
      
      public function MapProcess_403()
      {
         super();
      }
      
      private static function stopMC(param1:DisplayObjectContainer) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc2_:MovieClip = param1 as MovieClip;
         if(_loc2_)
         {
            _loc2_.stop();
            _loc3_ = uint(_loc2_.numChildren);
            _loc4_ = 0;
            while(_loc4_ < _loc3_)
            {
               stopMC(_loc2_.getChildAt(_loc4_) as MovieClip);
               _loc4_++;
            }
         }
      }
      
      override protected function init() : void
      {
         EventManager.addEventListener("Error13088",this.onEError13088);
         LevelManager.iconLevel.visible = false;
         ToolBarController.showOrHideAllUser(false);
         ToolBarController.panel.hide();
         this._petArr = new Array();
         this._boss = conLevel["boss"];
         animatorLevel.addEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         var _loc1_:int = 1;
         while(_loc1_ <= 4)
         {
            this._petArr.push(conLevel["pet_" + _loc1_]);
            _loc1_++;
         }
         switch(qingLongStatus)
         {
            case 0:
               this.initComp0();
               break;
            case 1:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp1);
               break;
            case 2:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp2);
               break;
            case 3:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp3);
               break;
            case 4:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp4);
         }
      }
      
      private function onEnterFrame(param1:Event) : void
      {
         var _loc2_:MovieClip = animatorLevel["lightening"];
         if(_loc2_.hitTestPoint(TaomeeManager.stage.mouseX,TaomeeManager.stage.mouseY))
         {
            _loc2_.play();
            (animatorLevel["ball"] as MovieClip).play();
         }
         else
         {
            _loc2_.stop();
            (animatorLevel["ball"] as MovieClip).stop();
         }
      }
      
      private function initComp0() : void
      {
         var circle:MovieClip = null;
         Task142.getMc(this._boss,1,"",function(param1:MovieClip):void
         {
            var clickBtn:SimpleButton = null;
            var mc:MovieClip = param1;
            clickBtn = mc.getChildByName("clickBtn") as SimpleButton;
            clickBtn.addEventListener(MouseEvent.CLICK,fightShouHu);
            clickBtn.enabled = false;
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               Task142.getMc(mc,mc.totalFrames,"boss_static",function(param1:MovieClip):void
               {
                  var i:int;
                  var pet:MovieClip = null;
                  var mc:MovieClip = param1;
                  mc.buttonMode = true;
                  clickBtn.enabled = true;
                  circle = (mc.parent as MovieClip).getChildByName("circle") as MovieClip;
                  circle.gotoAndStop(circle.totalFrames);
                  i = 0;
                  while(i < 4)
                  {
                     pet = _petArr[i];
                     Task142.getMc(pet,1,"",function(param1:MovieClip):void
                     {
                        var mc:MovieClip = param1;
                        AnimateManager.playMcAnimate(mc,0,"",function():void
                        {
                           Task142.getMc(mc,mc.totalFrames,"pet_static",function(param1:MovieClip):void
                           {
                              circle = (param1.parent as MovieClip).getChildByName("circle") as MovieClip;
                              circle.gotoAndStop(circle.totalFrames);
                              param1.buttonMode = true;
                              param1.addEventListener(MouseEvent.CLICK,fightShouHu);
                           });
                        });
                     });
                     i++;
                  }
               });
            });
         });
      }
      
      private function initComp1(param1:PetFightEvent) : void
      {
         var i:int;
         var pet:MovieClip = null;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp1);
         i = 0;
         while(i < 4)
         {
            pet = this._petArr[i];
            Task142.getMc(pet,2,"",function(param1:MovieClip):void
            {
               stopMC(param1.parent);
            });
            i++;
         }
         Task142.getMc(this._boss,2,"",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         NpcDialog.show(NPC.QINGLONG,["你的表现令我震惊，你愿意接受最后的考验吗？"],["我愿意接受最后的考验。","我还是下次再来吧。"],[this.initComp1Helper,this.initComp1Helper]);
      }
      
      private function initComp1Helper() : void
      {
         var pet:MovieClip = null;
         Task142.getMc(this._boss,2,"",function(param1:MovieClip):void
         {
            var i:int;
            var mc:MovieClip = param1;
            mc.buttonMode = true;
            mc.addEventListener(MouseEvent.CLICK,fightBoss);
            i = 0;
            while(i < 4)
            {
               pet = _petArr[i];
               Task142.getMc(pet,2,"",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  AnimateManager.playMcAnimate(mc,0,"",function():void
                  {
                     DisplayUtil.removeForParent(mc.parent);
                  });
               });
               i++;
            }
         });
      }
      
      private function initComp2(param1:PetFightEvent) : void
      {
         var i:int;
         var pet:MovieClip = null;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp2);
         i = 0;
         while(i < 4)
         {
            pet = this._petArr[i];
            Task142.getMc(pet,2,"",function(param1:MovieClip):void
            {
               stopMC(param1.parent);
            });
            i++;
         }
         Task142.getMc(this._boss,2,"",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         NpcDialog.show(NPC.QINGLONG,["等你的实力有长足的进步时再来吧！"],["我还是下次再来吧。"],[function():void
         {
            var index:* = undefined;
            var pet:* = undefined;
            index = 0;
            var i:* = 0;
            while(i < 4)
            {
               pet = _petArr[i];
               Task142.getMc(pet,2,"",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  AnimateManager.playMcAnimate(mc,0,"",function():void
                  {
                     ++index;
                     if(index == 4)
                     {
                        Task142.getMc(_boss,2,"",function(param1:MovieClip):void
                        {
                           var mc:MovieClip = param1;
                           AnimateManager.playMcAnimate(mc,0,"",function():void
                           {
                              DisplayUtil.removeForParent(mc.parent);
                              MapManager.changeMap(1);
                           });
                        });
                     }
                     DisplayUtil.removeForParent(mc.parent);
                  });
               });
               i++;
            }
         }]);
      }
      
      private function initComp3(param1:PetFightEvent) : void
      {
         var i:int;
         var pet:MovieClip = null;
         var id:int = 0;
         var name:String = null;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp3);
         i = 0;
         while(i < 4)
         {
            pet = this._petArr[i];
            DisplayUtil.removeForParent(pet);
            i++;
         }
         Task142.getMc(this._boss,2,"",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         if(TaskClass_146.spriteID != -1)
         {
            id = TaskClass_146.spriteID;
            name = String(ItemXMLInfo.getName(id));
            TaskClass_146.spriteID = -1;
            NpcDialog.show(NPC.QINGLONG,["我为你感到骄傲！请收下我的精元，我将与你同在！"],["我不会让你失望的。"],[function():void
            {
               Task142.getMc(_boss,2,"",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  AnimateManager.playMcAnimate(mc,0,"",function():void
                  {
                     ItemInBagAlert.show(id,"1个" + TextFormatUtil.getRedTxt(name) + "已经放入你的储存箱！",function():void
                     {
                        DisplayUtil.removeForParent(mc.parent);
                        MapManager.changeMap(1);
                     });
                  });
               });
            }]);
         }
         else
         {
            MapManager.changeMap(1);
         }
      }
      
      private function initComp4(param1:PetFightEvent) : void
      {
         var i:int;
         var pet:MovieClip = null;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp4);
         i = 0;
         while(i < 4)
         {
            pet = this._petArr[i];
            DisplayUtil.removeForParent(pet);
            i++;
         }
         Task142.getMc(this._boss,2,"",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         NpcDialog.show(NPC.QINGLONG,["等你的实力有长足的进步时再来吧！"],["我还是下次再来吧。"],[function():void
         {
            Task142.getMc(_boss,2,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc.parent);
                  MapManager.changeMap(1);
               });
            });
         }]);
      }
      
      private function fightShouHu(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.QINGLONG,["我是卡兰星系的守护神，你能进到这里说明你已经是个能独挡一面的精英了，但是真正的挑战现在才开始。"],["不管什么挑战我都不怕。","使用青龙战符","我还是下次再来吧。"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver1);
            FightManager.fightWithBoss("青龙守护兽",0,true);
         },function():void
         {
            checkFightSymbol();
         },function():void
         {
            MapManager.changeMap(1);
         }],true);
      }
      
      private function checkFightSymbol() : void
      {
         ItemManager.upDateCollection(1700244,function():void
         {
            if(ItemManager.getNumByID(1700244) > 0)
            {
               SocketConnection.sendWithCallback(46050,function(param1:SocketEvent):void
               {
                  SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver2);
                  FightManager.fightWithBoss("朵拉格",1,true);
               },2);
            }
            else
            {
               Alarm.show("你还没有青龙战符！");
            }
         });
      }
      
      private function onFightOver1(param1:SocketEvent) : void
      {
         var _loc2_:FightOverInfo = param1.data as FightOverInfo;
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver1);
         if(_loc2_.winnerID == MainManager.actorInfo.userID)
         {
            qingLongStatus = 1;
         }
         else
         {
            qingLongStatus = 2;
         }
      }
      
      private function fightBoss(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.FIGHT_OVER,this.onFightOver2);
         FightBossController.fightBoss("朵拉格",1);
      }
      
      private function onFightOver2(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver2);
         if((param1.data as FightOverInfo).winnerID == MainManager.actorID)
         {
            qingLongStatus = 3;
         }
         else
         {
            qingLongStatus = 4;
         }
      }
      
      private function onEError13088(param1:RobotEvent) : void
      {
         var event:RobotEvent = param1;
         EventManager.removeEventListener("Error13088",this.onEError13088);
         NpcDialog.show(NPC.XUANWU,["青龙空间出现了异常状况，你必须立刻离开这里。"],["嗯，我知道啦~~"],[function():void
         {
            MapManager.changeMap(1);
         }]);
      }
      
      override public function destroy() : void
      {
         EventManager.removeEventListener("Error13088",this.onEError13088);
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(true);
         ToolBarController.panel.show();
         animatorLevel.removeEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         this._boss = null;
         this._petArr = null;
      }
   }
}
