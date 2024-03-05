package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task142;
   import com.robot.app.task.tc.TaskClass_147;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
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
   import flash.events.IOErrorEvent;
   import flash.events.MouseEvent;
   import flash.media.Sound;
   import flash.net.URLRequest;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_483 extends BaseMapProcess
   {
      
      public static var qingLongStatus:int;
      
      private static var _soundList:Array = [];
      
      private static var _mIndex:uint = 0;
       
      
      private var _petArr:Array;
      
      private var _boss:MovieClip;
      
      private var _soundPathList:Array;
      
      private var checkUseItem:Boolean = false;
      
      public function MapProcess_483()
      {
         this._soundPathList = ["music_2.mp3","music_3.mp3"];
         super();
      }
      
      public static function getMc(param1:MovieClip, param2:uint, param3:String = "", param4:Function = null) : void
      {
         var child:MovieClip = null;
         var parentMC:MovieClip = param1;
         var frame:uint = param2;
         var name:String = param3;
         var func:Function = param4;
         parentMC.gotoAndStop(frame);
         if(name == "")
         {
            child = parentMC.getChildAt(0) as MovieClip;
         }
         else
         {
            child = parentMC.getChildByName(name) as MovieClip;
         }
         if(child)
         {
            if(func != null)
            {
               func(child);
            }
         }
         else
         {
            parentMC.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(name == "")
               {
                  child = parentMC.getChildAt(0) as MovieClip;
               }
               else
               {
                  child = parentMC.getChildByName(name) as MovieClip;
               }
               if(child)
               {
                  parentMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  if(func != null)
                  {
                     func(child);
                  }
               }
            });
         }
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
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         ToolBarController.showOrHideAllUser(false);
         EventManager.addEventListener("Error11075",this.onEError11075);
         this._petArr = new Array();
         this._boss = conLevel["boss"];
         (this._boss["bossBtn_1"] as SimpleButton).mouseEnabled = false;
         (this._boss["bossBtn_2"] as SimpleButton).mouseEnabled = false;
         (this._boss["bossBtn_3"] as SimpleButton).mouseEnabled = false;
         var _loc1_:int = 0;
         while(_loc1_ <= 4)
         {
            (conLevel["mon_" + _loc1_] as MovieClip).visible = false;
            this._petArr.push(conLevel["mon_" + _loc1_]);
            _loc1_++;
         }
         _mIndex = 0;
         this.loadMusic();
      }
      
      private function loadMusic() : void
      {
         var _loc1_:Sound = null;
         _loc1_ = new Sound(new URLRequest(ClientConfig.getResPath("module/ext/music/" + this._soundPathList[_mIndex])));
         _loc1_.addEventListener(Event.COMPLETE,this.onLoadSoundComplete);
         _loc1_.addEventListener(IOErrorEvent.IO_ERROR,this.onLoadMusicIoError);
         _soundList.push(_loc1_);
      }
      
      private function onLoadMusicIoError(param1:IOErrorEvent) : void
      {
         (param1.currentTarget as Sound).removeEventListener(IOErrorEvent.IO_ERROR,this.onLoadMusicIoError);
         this.gameLoop();
      }
      
      private function onLoadSoundComplete(param1:Event) : void
      {
         ++_mIndex;
         if(_mIndex == this._soundPathList.length)
         {
            this.gameLoop();
         }
         else
         {
            this.loadMusic();
         }
      }
      
      private function gameLoop() : void
      {
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
               break;
            case 5:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp5);
               break;
            case 6:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp4);
               break;
            case 7:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp7);
               break;
            case 8:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp4);
               break;
            case 9:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp7);
               break;
            case 10:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp4);
               break;
            case 11:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp11);
               break;
            case 12:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.initComp4);
               break;
            case 13:
               this.initComp1();
         }
      }
      
      private function initComp0() : void
      {
         getMc(this._boss,1,"mc",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               var pet:MovieClip = null;
               var i:uint = 0;
               while(i <= 4)
               {
                  pet = _petArr[i];
                  pet.visible = true;
                  getMc(pet,1,"",function(param1:MovieClip):void
                  {
                     var mc:MovieClip = param1;
                     AnimateManager.playMcAnimate(mc,0,"",function():void
                     {
                        getMc(mc,mc.totalFrames,"pet_static",function(param1:MovieClip):void
                        {
                           param1.buttonMode = true;
                           param1.addEventListener(MouseEvent.CLICK,onFightMon);
                           (_boss["bossBtn_1"] as SimpleButton).mouseEnabled = true;
                           (_boss["bossBtn_1"] as SimpleButton).addEventListener(MouseEvent.CLICK,onFightMon);
                        });
                     });
                  });
                  i++;
               }
            });
         });
      }
      
      private function onFightMon(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BAI_HU,["我是罗格星系的守护神，你能进到这里说明你已经是个能独挡一面的精英了，但是真正的挑战现在才开始。"],["不管什么挑战我都不怕。","使用白虎战符","我还是下次再来吧。"],[function():void
         {
            (_boss["bossBtn_1"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onFightMon);
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver1);
            FightManager.fightWithBoss("白虎守护兽",0,true);
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
         ItemManager.upDateCollection(1700252,function():void
         {
            if(ItemManager.getNumByID(1700252) > 0)
            {
               checkUseItem = true;
               SocketConnection.sendWithCallback(46050,function(param1:SocketEvent):void
               {
                  SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver6);
                  FightManager.fightWithBoss("泰格尔",5,true);
               },3);
            }
            else
            {
               Alarm.show("你还没有白虎战符！");
            }
         });
      }
      
      private function initComp1(param1:PetFightEvent = null) : void
      {
         var i:uint;
         var pet:MovieClip = null;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp1);
         i = 0;
         while(i <= 4)
         {
            pet = this._petArr[i];
            pet.visible = true;
            getMc(pet,2,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  mc.parent.visible = false;
               });
            });
            i++;
         }
         getMc(this._boss,3,"mc",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            if(_soundList[0])
            {
               (_soundList[0] as Sound).play();
            }
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               (_boss["bossBtn_1"] as SimpleButton).mouseEnabled = false;
               (_boss["bossBtn_2"] as SimpleButton).mouseEnabled = true;
               (_boss["bossBtn_3"] as SimpleButton).mouseEnabled = true;
               (_boss["bossBtn_2"] as SimpleButton).addEventListener(MouseEvent.CLICK,onMouseFightHu);
               (_boss["bossBtn_3"] as SimpleButton).addEventListener(MouseEvent.CLICK,onMouseWrieHu);
            });
         });
      }
      
      private function onMouseFightHu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BAI_HU,["想战胜我？没那么容易！"],["我一定会打败你。","我还是下次再来吧。"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver2);
            FightManager.fightWithBoss("战虎",3,true);
         },function():void
         {
            getMc(_boss,2,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc.parent);
                  MapManager.changeMap(711);
               });
            });
         }]);
      }
      
      private function onMouseWrieHu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BAI_HU,["别来妨碍我，我才是这个身体的统治者！"],["我一定会打败你。","我还是下次再来吧。"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver4);
            FightManager.fightWithBoss("电虎",1,true);
         },function():void
         {
            getMc(_boss,2,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc.parent);
                  MapManager.changeMap(711);
               });
            });
         }]);
      }
      
      private function initComp1Helper() : void
      {
         var pet:MovieClip = null;
         Task142.getMc(this._boss,2,"mc",function(param1:MovieClip):void
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
         var i:uint;
         var pet:MovieClip = null;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp2);
         i = 0;
         while(i <= 4)
         {
            pet = this._petArr[i];
            pet.visible = true;
            getMc(pet,2,"",function(param1:MovieClip):void
            {
               stopMC(param1.parent);
            });
            i++;
         }
         getMc(this._boss,1,"mc",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         NpcDialog.show(NPC.BAI_HU,["等你的实力有长足的进步时再来吧！"],["我还是下次再来吧。"],[function():void
         {
            var index:* = undefined;
            var pet:* = undefined;
            index = 0;
            var i:* = 0;
            while(i <= 4)
            {
               pet = _petArr[i];
               getMc(pet,2,"",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  AnimateManager.playMcAnimate(mc,0,"",function():void
                  {
                     ++index;
                     if(index == 5)
                     {
                        getMc(_boss,2,"mc",function(param1:MovieClip):void
                        {
                           var mc:MovieClip = param1;
                           AnimateManager.playMcAnimate(mc,0,"",function():void
                           {
                              DisplayUtil.removeForParent(mc.parent);
                              MapManager.changeMap(711);
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
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp3);
         getMc(this._boss,4,"mc",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               (_boss["bossBtn_3"] as SimpleButton).mouseEnabled = true;
               (_boss["bossBtn_3"] as SimpleButton).addEventListener(MouseEvent.CLICK,onMouseBigWireHu);
            });
         });
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
         Task142.getMc(this._boss,1,"mc",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         NpcDialog.show(NPC.BAI_HU,["等你的实力有长足的进步时再来吧！"],["我还是下次再来吧。"],[function():void
         {
            Task142.getMc(_boss,2,"mc",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc.parent);
                  MapManager.changeMap(711);
               });
            });
         }]);
      }
      
      private function initComp5(param1:PetFightEvent) : void
      {
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp5);
         getMc(this._boss,5,"mc",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               (_boss["bossBtn_2"] as SimpleButton).mouseEnabled = true;
               (_boss["bossBtn_2"] as SimpleButton).addEventListener(MouseEvent.CLICK,onMouseBigFightHu);
            });
         });
      }
      
      private function initComp7(param1:PetFightEvent) : void
      {
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.initComp7);
         getMc(this._boss,6,"mc",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            if(_soundList[1])
            {
               (_soundList[1] as Sound).play();
            }
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               (_boss["bossBtn_1"] as SimpleButton).mouseEnabled = true;
               (_boss["bossBtn_1"] as SimpleButton).addEventListener(MouseEvent.CLICK,fightTrueHu);
            });
         });
      }
      
      private function initComp11(param1:PetFightEvent) : void
      {
         var id:int = 0;
         var name:String = null;
         var event:PetFightEvent = param1;
         getMc(this._boss,1,"mc",function(param1:MovieClip):void
         {
            stopMC(param1.parent);
         });
         if(TasksManager.getTaskStatus(147) == TasksManager.COMPLETE)
         {
            id = TaskClass_147.spriteID;
            name = String(ItemXMLInfo.getName(id));
            TaskClass_147.spriteID = -1;
            NpcDialog.show(NPC.BAI_HU,["我为你感到骄傲！请收下我的精元，我将与你同在！"],["我不会让你失望的。"],[function():void
            {
               Task142.getMc(_boss,2,"mc",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  AnimateManager.playMcAnimate(mc,0,"",function():void
                  {
                     ItemInBagAlert.show(id,"1个" + TextFormatUtil.getRedTxt(name) + "已经放入你的储存箱！",function():void
                     {
                        DisplayUtil.removeForParent(mc.parent);
                        MapManager.changeMap(711);
                     });
                  });
               });
            }]);
         }
         else
         {
            MapManager.changeMap(711);
         }
      }
      
      private function fightTrueHu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BAI_HU,["你的表现令我震惊，你愿意接受最后的考验吗？"],["我愿意接受最后的考验。","我还是下次再来吧。"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver6);
            FightManager.fightWithBoss("泰格尔",5,true);
         },function():void
         {
            MapManager.changeMap(711);
         }]);
      }
      
      private function onMouseBigWireHu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BAI_HU,["哈哈，电虎的能力已经被我吸收，我才是真正的王！"],["我不会怕你的！","我还是下次再来吧。"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver5);
            FightManager.fightWithBoss("电虎",4,true);
         },function():void
         {
            getMc(_boss,2,"mc",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc.parent);
                  MapManager.changeMap(711);
               });
            });
         }]);
      }
      
      private function onMouseBigFightHu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BAI_HU,["哈哈，战虎的能力已经被我吸收，我才是真正的王！"],["我不会怕你的！","我还是下次再来吧。"],[function():void
         {
            SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onFightOver3);
            FightManager.fightWithBoss("战虎",2,true);
         },function():void
         {
            getMc(_boss,2,"mc",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc.parent);
                  MapManager.changeMap(711);
               });
            });
         }]);
      }
      
      private function onFightOver1(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         var fightInfo:FightOverInfo = event.data as FightOverInfo;
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver1);
         if(fightInfo.winnerID == MainManager.actorInfo.userID)
         {
            qingLongStatus = 1;
            BufferRecordManager.setState(MainManager.actorInfo,128,true,function():void
            {
            });
         }
         else
         {
            qingLongStatus = 2;
         }
      }
      
      private function fightBoss(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.FIGHT_OVER,this.onFightOver2);
         FightManager.fightWithBoss("战白虎",1,true);
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
      
      private function onFightOver3(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver3);
         if((param1.data as FightOverInfo).winnerID == MainManager.actorID)
         {
            qingLongStatus = 7;
         }
         else
         {
            qingLongStatus = 8;
         }
      }
      
      private function onFightOver4(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver4);
         if((param1.data as FightOverInfo).winnerID == MainManager.actorID)
         {
            qingLongStatus = 5;
         }
         else
         {
            qingLongStatus = 6;
         }
      }
      
      private function onFightOver5(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver5);
         if((param1.data as FightOverInfo).winnerID == MainManager.actorID)
         {
            qingLongStatus = 9;
         }
         else
         {
            qingLongStatus = 10;
         }
      }
      
      private function onFightOver6(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver6);
         if((param1.data as FightOverInfo).winnerID == MainManager.actorID)
         {
            qingLongStatus = 11;
         }
         else
         {
            qingLongStatus = 12;
         }
      }
      
      private function onEError11075(param1:RobotEvent) : void
      {
         var event:RobotEvent = param1;
         EventManager.removeEventListener("Error11075",this.onEError11075);
         NpcDialog.show(NPC.BAI_HU,["白虎空间出现了异常状况，你必须立刻离开这里。"],["嗯，我知道啦~~"],[function():void
         {
            MapManager.changeMap(711);
         }]);
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(true);
         ToolBarController.panel.show();
         this._boss = null;
         this._petArr = null;
         _soundList.splice(0);
      }
   }
}
