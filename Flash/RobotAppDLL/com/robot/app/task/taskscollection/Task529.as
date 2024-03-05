package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.MouseController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task529
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _petHealMc:MovieClip;
      
      private static var _petTaklAni:MovieClip;
      
      private static var endFight:Boolean = false;
      
      private static var isFight:Boolean = false;
      
      private static var _arrowmc:MovieClip;
      
      private static var _petAniMc:MovieClip;
      
      private static var _aimCount:uint = 0;
       
      
      public function Task529()
      {
         super();
      }
      
      public static function initFirstTask(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _petTaklAni = _map.animatorLevel["petTaklAni"];
         _petTaklAni.visible = false;
         _petHealMc = _map.conLevel["petHealMc"];
         _petHealMc.visible = false;
         _arrowmc = _map.conLevel["arrowmc"];
         _arrowmc.visible = false;
         status = uint(TasksManager.getTaskStatus(529));
         if(status == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_petTaklAni);
            _petTaklAni = null;
            DisplayUtil.removeForParent(_petHealMc);
            _petHealMc = null;
            DisplayUtil.removeForParent(_arrowmc);
            _arrowmc = null;
         }
         else if(status == TasksManager.UN_ACCEPT)
         {
            DisplayUtil.removeForParent(_petTaklAni);
            _petTaklAni = null;
            DisplayUtil.removeForParent(_petHealMc);
            _petHealMc = null;
            DisplayUtil.removeForParent(_arrowmc);
            _arrowmc = null;
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(529,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startPro0();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  MapManager.changeMap(330);
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  startPro4();
               }
               else if(Boolean(param1[4]) && !param1[5])
               {
                  startPro5();
               }
            });
         }
      }
      
      private static function startPro0() : void
      {
         _petTaklAni.visible = true;
         _petTaklAni.gotoAndPlay(1);
         MouseController.removeMouseEvent();
         NpcDialog.show(NPC.PET_ZUZHANG,["呜呜呜，我的孩子，你究竟在哪里啊，我们都很惦记你。"],["咦？这些精灵怎么了，发生什么事情啦！"],[function():void
         {
            NpcDialog.show(NPC.PET_ZUZHANG,["额~，咕咕芽前几天说要去看寰宇天晶石，但是到现在还没有回来，已经好几天了，你能帮我找到它吗？"],["啊！！寰宇天晶，我马上去斯科尔星！"],[function():void
            {
               MouseController.addMouseEvent();
               TasksManager.complete(529,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(330);
                  }
               });
            }]);
         }]);
      }
      
      private static function startPro4() : void
      {
         _petTaklAni.gotoAndStop(_petTaklAni.totalFrames);
         _petTaklAni.visible = true;
         _petHealMc.gotoAndStop(1);
         _petHealMc.visible = true;
         _petHealMc.buttonMode = true;
         _arrowmc.visible = true;
         MouseController.removeMouseEvent();
         NpcDialog.show(NPC.SEER,["族长…族长，我把咕咕芽带回来了，原来它一直被海盗控制在斯科尔星上天晶石中！海盗太可恶了！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.PET_ZUZHANG,["呜呜呜….我可怜的孩子，你终于回到我身边了，怎么会伤成这样啊！你能救救它吗？"],["这….这..怎么办呢？"],[function():void
            {
               NpcDialog.show(NPC.PET_ZUZHANG,["很久很久以前，我听说在斯科尔星上生活着一个叫做迷你芽的精灵，它具有极强的修复能力，或许只有它才能带来生命的奇迹！"],["你能帮我去斯科尔星上找那个精灵吗？（记得带着迷你芽来找我哦）"],[function():void
               {
                  MouseController.addMouseEvent();
                  _petHealMc.addEventListener(MouseEvent.CLICK,onHealthPet);
               }]);
            }]);
         });
      }
      
      private static function onHealthPet(param1:MouseEvent) : void
      {
         var petid:uint = 0;
         var e:MouseEvent = param1;
         if(MainManager.actorModel.pet)
         {
            petid = uint(MainManager.actorModel.pet.info.petID);
            if(petid == 293 || petid == 294 || petid == 295)
            {
               _arrowmc.visible = false;
               _petHealMc.removeEventListener(MouseEvent.CLICK,onHealthPet);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_529_1"),function():void
               {
                  _petHealMc.visible = true;
                  AnimateManager.playMcAnimate(_petHealMc,2,"ani5",function():void
                  {
                     _petHealMc["ani5"].stop();
                     TasksManager.complete(529,4,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           startPro5();
                        }
                     });
                  });
               });
            }
            else
            {
               NpcDialog.show(NPC.PET_ZUZHANG,["迷你芽呢，你怎么还没有把它带来啊，时间来不及了!"],["哦哦，我这就去！"]);
            }
         }
         else
         {
            NpcDialog.show(NPC.PET_ZUZHANG,["迷你芽呢，你怎么还没有把它带来啊，时间来不及了!"],["哦哦，我这就去！"]);
         }
      }
      
      private static function startPro5() : void
      {
         NpcDialog.show(NPC.PET_SMALL,["哇，我觉得自己充满了力量，之前的疼痛已经消失了，是你救了我吗？迷你芽，你是我的救命恩人啊！我一定要报答你！"],["呵呵，举手之劳而已，不用放在心上啦！"],[function():void
         {
            NpcDialog.show(NPC.PET_ZUZHANG,["真的太感谢了，在我们最需要帮助的时候，你出现了，看来你和咕咕芽很有缘啊！"],["呵呵，我也这么觉得！"],[function():void
            {
               NpcDialog.show(NPC.PET_SMALL,["族长，我…我想跟着迷你芽一起………."],null,null,false,function():void
               {
                  NpcDialog.show(NPC.PET_ZUZHANG,["恩，我知道你想说什么，去吧，好好跟着迷你芽修炼，将来你们可别忘记帮助其他精灵们哦!"],["恩，我们知道了，族长你放心吧"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["好感动啊！快去向博士汇报一下吧！"],["去实验室告诉博士!"],[function():void
                     {
                        TasksManager.complete(529,5,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              MapManager.changeMap(5);
                           }
                        });
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      public static function initSecondTask(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _petAniMc = _map.conLevel["petAniMc"];
         _petAniMc.visible = false;
         status = uint(TasksManager.getTaskStatus(529));
         if(status == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_petAniMc);
            _petAniMc = null;
         }
         else if(status == TasksManager.UN_ACCEPT)
         {
            DisplayUtil.removeForParent(_petAniMc);
            _petAniMc = null;
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(529,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  startPro1();
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  if(isFight)
                  {
                     return;
                  }
                  startPro2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  startPro3();
               }
            });
         }
      }
      
      private static function startPro1() : void
      {
         _petAniMc.visible = true;
         MouseController.removeMouseEvent();
         AnimateManager.playMcAnimate(_petAniMc,1,"ani1",function():void
         {
            MouseController.addMouseEvent();
            _petAniMc["ani1"].stop();
            TasksManager.complete(529,1,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro2();
               }
            });
         });
      }
      
      private static function startPro2() : void
      {
         _petAniMc.visible = true;
         _petAniMc.gotoAndStop(1);
         NpcDialog.show(NPC.SEER,["哇欧，怎么会这样呢？是谁把你困在天晶石中的？？还是先把你救出来再说吧！"],["（使用头部射击试试）"],[function():void
         {
            _aimCount = 0;
            AimatController.addEventListener(AimatEvent.PLAY_START,onPlayStartHandler);
            AimatController.addEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         }]);
      }
      
      private static function onPlayStartHandler(param1:AimatEvent) : void
      {
         MouseController.removeMouseEvent();
      }
      
      private static function onPlayEndHandler(param1:AimatEvent) : void
      {
         var ainfo:AimatInfo = null;
         var e:AimatEvent = param1;
         MouseController.addMouseEvent();
         if(MainManager.actorID == e.info.userID)
         {
            ainfo = e.info;
            if(_petAniMc.hitTestPoint(ainfo.endPos.x,ainfo.endPos.y))
            {
               ++_aimCount;
               switch(_aimCount)
               {
                  case 2:
                     AnimateManager.playMcAnimate(_petAniMc,2,"ani2",function():void
                     {
                        _petAniMc["ani2"].stop();
                     });
                     break;
                  case 3:
                     AnimateManager.playMcAnimate(_petAniMc,3,"ani3",function():void
                     {
                        _petAniMc["ani3"].stop();
                        AimatController.removeEventListener(AimatEvent.PLAY_START,onPlayStartHandler);
                        AimatController.removeEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
                        NpcDialog.show(NPC.SEER,["你…你…怎么会变成这样？好熟悉的样子，对了，盖亚当时也是这样的….. 难道又是海盗在作怪吗？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.PET_BLACKFIRE,["哼哼….谢谢你把我从天晶石里救出来！"],["什么？这难道是个阴谋！先试着击败它吧！"],[function():void
                           {
                              _petAniMc.buttonMode = true;
                              _petAniMc.addEventListener(MouseEvent.CLICK,onfightHandler);
                           }]);
                        });
                     });
               }
            }
         }
      }
      
      private static function onfightHandler(param1:MouseEvent) : void
      {
         isFight = true;
         endFight = false;
         _petAniMc.removeEventListener(MouseEvent.CLICK,onfightHandler);
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         FightManager.fightWithBoss("咕咕芽",0);
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         isFight = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         _petAniMc.visible = true;
         _petAniMc.buttonMode = true;
         _petAniMc.addEventListener(MouseEvent.CLICK,onfightHandler);
      }
      
      private static function onAlarmClick(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         endFight = true;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            _petAniMc.removeEventListener(MouseEvent.CLICK,onfightHandler);
            TasksManager.complete(529,2,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro3();
               }
            });
         }
         else
         {
            _petAniMc.visible = true;
            _petAniMc.gotoAndStop(5);
            _petAniMc.buttonMode = true;
            NpcDialog.show(NPC.PET_BLACKFIRE,["哈哈哈，就你这点实力还想击败我，还是再修炼修炼吧！"],["它的实力确实好强，怎么会这样！"],[function():void
            {
               _petAniMc.addEventListener(MouseEvent.CLICK,onfightHandler);
            }]);
         }
      }
      
      private static function startPro3() : void
      {
         _petAniMc.visible = true;
         AnimateManager.playMcAnimate(_petAniMc,4,"ani4",function():void
         {
            _petAniMc["ani4"].stop();
            MouseController.removeMouseEvent();
            NpcDialog.show(NPC.PET_SMALL,["呜呜呜，我怎么了，之前好像梦到和谁打了一场架，浑身好疼啊！"],["糟糕，我是不是出手太重了呀！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["果然没错，又是海盗的阴谋，可恶，连弱小的精灵都不放过！我发誓一定会收拾你们的！"],["先送咕咕芽回到拓梯星"],[function():void
               {
                  MouseController.addMouseEvent();
                  TasksManager.complete(529,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MapManager.changeMap(429);
                     }
                  });
               }]);
            }]);
         });
      }
      
      public static function destory() : void
      {
         if(MapManager.currentMap.id == 429)
         {
            if(_petHealMc)
            {
               _petHealMc.removeEventListener(MouseEvent.CLICK,onfightHandler);
            }
         }
         else if(MapManager.currentMap.id == 330)
         {
            if(_petAniMc)
            {
               _petAniMc.removeEventListener(MouseEvent.CLICK,onHealthPet);
            }
            AimatController.removeEventListener(AimatEvent.PLAY_START,onPlayStartHandler);
            AimatController.removeEventListener(AimatEvent.PLAY_START,onPlayEndHandler);
            EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
            if(endFight)
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
            }
         }
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
