package com.robot.app.task.taskscollection
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1025
   {
      
      private static var _mcForMap693:MovieClip;
      
      private static var _mcBulu:MovieClip;
      
      private static var _mcTianma:MovieClip;
      
      private static var _mcYier:MovieClip;
      
      private static const TASK_ID:uint = 1025;
      
      private static var _map:BaseMapProcess;
      
      private static var _ishaveJinyuan:Boolean;
      
      private static var _ishaveDaoju:Boolean;
      
      private static var _ishavePet:Boolean;
      
      private static var _catchTime:uint;
      
      private static var _statePo:uint;
       
      
      public function Task1025()
      {
         super();
      }
      
      public static function initTaskForMap693(param1:BaseMapProcess) : void
      {
         var i:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap693 = _map.conLevel["task_1025"];
         _mcBulu = _map.conLevel["bulu"];
         _mcTianma = _map.conLevel["tianma"];
         _mcYier = _map.conLevel["yier"];
         _mcForMap693.visible = false;
         _mcBulu.visible = false;
         _mcTianma.visible = false;
         _mcYier.visible = false;
         i = 0;
         while(i < 4)
         {
            _map.conLevel["flower_" + i].visible = false;
            i++;
         }
         _map.conLevel["ad"].buttonMode = true;
         _map.conLevel["ad"].addEventListener(MouseEvent.CLICK,onAdClick);
         if(TasksManager.getTaskStatus(819) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(819,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  DisplayUtil.removeForParent(_mcForMap693);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  DisplayUtil.removeForParent(_mcForMap693);
               }
               else
               {
                  start();
               }
            });
         }
         else
         {
            start();
         }
      }
      
      private static function start() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  goStep1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  goStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  goStep3();
               }
               else
               {
                  DisplayUtil.removeForParent(_mcForMap693);
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASK_ID,function():void
            {
               goStep1();
            });
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap693);
         }
      }
      
      private static function onAdClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SaveTianmaAdPanel"),"正在打开....");
      }
      
      private static function goStep1() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _mcForMap693.visible = true;
         _mcBulu.visible = true;
         _mcTianma.visible = true;
         CommonUI.addYellowExcal(_mcBulu,20,0);
         _mcBulu.buttonMode = true;
         _mcTianma.buttonMode = true;
         _mcBulu.addEventListener(MouseEvent.CLICK,onBuluClick);
         _mcTianma.addEventListener(MouseEvent.CLICK,onTianmaClick);
      }
      
      private static function onBuluClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.BULU,["小赛尔，你可来了，快去看看圣光天马吧！它看上去伤的不轻啊！"],["恩恩，我这就去！"],[function():void
         {
            CommonUI.removeYellowArrow(_mcTianma);
            CommonUI.addYellowArrow(_mcTianma,0,0,300);
         }]);
      }
      
      private static function onTianmaClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         _mcBulu.visible = false;
         _mcTianma.visible = false;
         CommonUI.removeYellowExcal(_mcBulu);
         CommonUI.removeYellowArrow(_mcTianma);
         _mcBulu.buttonMode = false;
         _mcTianma.buttonMode = false;
         _mcBulu.removeEventListener(MouseEvent.CLICK,onBuluClick);
         _mcTianma.removeEventListener(MouseEvent.CLICK,onTianmaClick);
         NpcDialog.show(NPC.SHENGGUANGTIANMA,["亲爱的赛尔，能在这里见到你真的太好了，很抱歉让你见到我现在这个样子，真是太惭愧了！"],["不，你在我心里中是最棒的！"],[function():void
         {
            AnimateManager.playMcAnimate(_mcForMap693,1,"task_1025_mc1",function():void
            {
               NpcDialog.show(NPC.SHENGGUANGTIANMA,["哦，原来是灵王，你怎么也来了！这次我们联手都没有击败邪恶四灵的成员，都是我的错！"],["别想太多了，现在你的伤势要紧！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["灵王，究竟有什么办法才能治愈圣光天马呢？我可以做些什么？"],["这个么…"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1025_1"),function():void
                     {
                        NpcDialog.show(NPC.JUSHILINGWANG,["圣光天马，你别在勉强自己了，这次就让我来吧！之前要不是你，我也不可能迷途知返的！相信我，你一定会没事的！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["恩恩，灵王说的没错，我们一定可以帮助你康复起来的！但是我们如何让这些昙花再次开启呢？"],["让我来吧！"],[function():void
                           {
                              AnimateManager.playMcAnimate(_mcForMap693,2,"task_1025_mc2",function():void
                              {
                                 NpcDialog.show(NPC.JUSHILINGWANG,["天马你…看来它一定是用尽了自己最后的力量！赛尔，我们不能再等了，接下来就看你的了，我去想其他的办法！"],["恩恩，但是…"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_mcForMap693,3,"task_1025_mc3",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["但是…这些四色羽毛看上去没什么能量的样子，和之前我看到的完全不一样，一定有什么问题！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(_mcForMap693,4,"task_1025_mc4",function():void
                                          {
                                             NpcDialog.show(NPC.BULU,["我知道有种办法可以让四色羽毛再次焕发出能量，但是就看我们大家有没有这个毅力了，这可是累人的差事啊！"],["真的吗？布鲁，你知道？那就快说吧！"],[function():void
                                             {
                                                NpcDialog.show(NPC.BULU,["想必也只有这个办法了，只有我们找到足够的昙花花粉才能使0xff0000四色羽毛0xffffff再次焕发出本来的能量，才能拯救圣光天马！"],["哎呀，我怎么把这个忘记了？"],[function():void
                                                {
                                                   NpcDialog.show(NPC.BULU,["据说昙花花粉分为昙花金粉、昙花银粉以及最珍贵的昙花飘逸粉，而这些神奇的花粉就在守护这片仙境的精灵伊尔和鹰嘴蝶的身上！"],["太好了，我这就去找！"],[function():void
                                                   {
                                                      TasksManager.complete(TASK_ID,0,function():void
                                                      {
                                                         goStep2();
                                                      });
                                                   }]);
                                                }]);
                                             }]);
                                          });
                                       });
                                    });
                                 }]);
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function goStep2() : void
      {
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         _mcForMap693.gotoAndStop(5);
         _mcForMap693.visible = true;
         _mcBulu.x = 362;
         _mcBulu.y = 225;
         _mcBulu.buttonMode = true;
         _mcBulu.visible = true;
         CommonUI.addYellowExcal(_mcBulu,20,0);
         _mcBulu.addEventListener(MouseEvent.CLICK,onBuluClick2);
         _mcTianma.visible = true;
         _mcTianma.buttonMode = true;
         _mcTianma.addEventListener(MouseEvent.CLICK,onTianmaClick2);
         _mcYier.visible = true;
         _mcYier.buttonMode = true;
         _mcYier.addEventListener(MouseEvent.CLICK,onYierClick);
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            _map.conLevel["flower_" + _loc1_].visible = true;
            _loc1_++;
         }
         getFlowerState();
      }
      
      public static function getFlowerState() : void
      {
         SocketConnection.addCmdListener(CommandID.SAVE_TIANMA_FOLWERSTATE,onFolwerStateHandler);
         SocketConnection.send(CommandID.SAVE_TIANMA_FOLWERSTATE);
      }
      
      private static function onBuluClick2(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.BULU,["我知道有种办法可以让四色羽毛再次焕发出能量，但是就看我们大家有没有这个毅力了，这可是累人的差事啊！"],["真的吗？布鲁，你知道？那就快说吧！"],[function():void
         {
            NpcDialog.show(NPC.BULU,["想必也只有这个办法了，只有我们找到足够的昙花花粉才能使0xff0000四色羽毛0xffffff再次焕发出本来的能量，才能拯救圣光天马！"],["哎呀，我怎么把这个忘记了？"],[function():void
            {
               NpcDialog.show(NPC.BULU,["据说昙花花粉分为昙花金粉、昙花银粉以及最珍贵的昙花飘逸粉，而这些神奇的花粉就在守护这片仙境的精灵伊尔和鹰嘴蝶的身上！"],["太好了，我这就去找！"]);
            }]);
         }]);
      }
      
      private static function onTianmaClick2(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1025_2"),function():void
         {
            NpcDialog.show(NPC.SHENGGUANGTIANMA,["噗噗…可恶！看来我的伤势不轻啊！现在受伤的地方有开始剧烈疼痛了！"],["圣光天马，我一定会治好你的！"]);
         });
      }
      
      private static function onYierClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.YIER,["加油啊！赛尔，圣光天马的康复关键就在这些四色羽毛上，快看看这些四色羽毛的状态吧！记得时时关注这些羽毛的状态哦！"],["恩，我知道了！"],[function():void
         {
            AnimateManager.playMcAnimate(_mcForMap693,5,"task_1025_mc5",function():void
            {
            });
         }]);
      }
      
      private static function onFolwerStateHandler(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var folwerState:Array;
         var b:Boolean;
         var flowerArr:Array;
         var i:uint;
         var isOver:Boolean = false;
         var j:uint = 0;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SAVE_TIANMA_FOLWERSTATE,onFolwerStateHandler);
         data = event.data as ByteArray;
         folwerState = KTool.readDataByBits(data,32);
         b = false;
         flowerArr = ["蓝色羽毛","紫色羽毛","白色羽毛","金色羽毛"];
         i = 0;
         while(i < 4)
         {
            CommonUI.removeYellowArrow(_map.conLevel["flower_" + i]);
            if(folwerState[i] == 0)
            {
               isOver = true;
               if(!b)
               {
                  b = true;
                  CommonUI.addYellowArrow(_map.conLevel["flower_" + i],0,0,300);
               }
            }
            i++;
         }
         if(!isOver)
         {
            TasksManager.complete(TASK_ID,1,function():void
            {
               goStep3();
            });
         }
         else
         {
            j = 0;
            while(j < 4)
            {
               _map.conLevel["flower_" + j].buttonMode = true;
               _map.conLevel["flower_" + j].removeEventListener(MouseEvent.CLICK,onFlowerClick);
               _map.conLevel["flower_" + j].addEventListener(MouseEvent.CLICK,onFlowerClick);
               ToolTipManager.remove(_map.conLevel["flower_" + j]);
               ToolTipManager.add(_map.conLevel["flower_" + j],flowerArr[j]);
               j++;
            }
         }
      }
      
      private static function onFlowerClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         var _loc3_:Object = new Object();
         CommonUI.removeYellowArrow(_map.conLevel[_loc2_]);
         switch(_loc2_)
         {
            case "flower_0":
               _loc3_.type = 0;
               ModuleManager.showModule(ClientConfig.getAppModule("SaveTianmaPanel"),"正在打开....",_loc3_);
               break;
            case "flower_1":
               _loc3_.type = 1;
               ModuleManager.showModule(ClientConfig.getAppModule("SaveTianmaPanel"),"正在打开....",_loc3_);
               break;
            case "flower_2":
               _loc3_.type = 2;
               ModuleManager.showModule(ClientConfig.getAppModule("SaveTianmaPanel"),"正在打开....",_loc3_);
               break;
            case "flower_3":
               _loc3_.type = 3;
               ModuleManager.showModule(ClientConfig.getAppModule("SaveTianmaPanel"),"正在打开....",_loc3_);
         }
      }
      
      private static function goStep3() : void
      {
         _mcForMap693.gotoAndStop(5);
         _mcForMap693.visible = true;
         NpcDialog.show(NPC.SEER,["太好了，我终于成功的唤醒了四色羽毛，圣光天马终于可以获救了！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(_mcForMap693,6,"task_1025_mc6",function():void
            {
               NpcDialog.show(NPC.SHENGGUANGTIANMA,["感觉好多了，太感谢你了，" + MainManager.actorInfo.nick + "！要不是你，我的伤势是不可能恢复的！"],["哇！圣光天马，你真的好了吗？"],[function():void
               {
                  NpcDialog.show(NPC.SHENGGUANGTIANMA,["恩恩，我已经好很多了，为了感谢你对我的救命之恩，这些东西你收下吧！"],null,null,false,function():void
                  {
                     TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                     {
                        var b:Boolean = param1;
                        if(b)
                        {
                           NpcDialog.show(NPC.SHENGGUANGTIANMA,["赛尔，认识你真的很幸运，拉珀尔仙境是我的故乡，相信我们有缘一定会再见的！"],["恩恩，保重啊！圣光天马！"],[function():void
                           {
                              AnimateManager.playMcAnimate(_mcForMap693,7,"task_1025_mc7",function():void
                              {
                                 NpcDialog.show(NPC.SEER,["呜呜呜…圣光天马，你也要好好照顾自己，我会想你的！！"],null,null,false,function():void
                                 {
                                    CommonUI.removeYellowExcal(_mcBulu);
                                    destroy();
                                    DisplayUtil.removeForParent(_mcForMap693);
                                 });
                              });
                           }]);
                        }
                     });
                  });
               }]);
            });
         });
      }
      
      public static function AdMsg() : void
      {
         var _loc1_:SharedObject = SOManager.getUserSO(SOManager.LOCALMSG);
         var _loc2_:Date = new Date();
         var _loc3_:* = _loc2_.month + "_" + _loc2_.dateUTC + "_" + MainManager.actorID + "first_login";
         if(_loc1_.data[_loc3_] == undefined)
         {
            LocalMsgController.addLocalMsg("SaveTianmaSysPanel");
            _loc1_.data[_loc3_] = true;
            SOManager.flush(_loc1_);
         }
      }
      
      private static function getHavePet() : void
      {
         var _loc2_:uint = 0;
         var _loc3_:PetListInfo = null;
         var _loc1_:Array = PetManager.getBagMap().concat();
         if(_loc1_.length > 0)
         {
            _loc2_ = 0;
            while(_loc2_ < _loc1_.length)
            {
               _loc3_ = _loc1_[_loc2_] as PetListInfo;
               if(_loc3_.id == 998 || _loc3_.id == 999)
               {
                  _ishavePet = true;
                  _catchTime = _loc3_.catchTime;
                  break;
               }
               _loc2_++;
            }
         }
         else
         {
            _ishavePet = false;
         }
         if(_ishavePet)
         {
            SocketConnection.addCmdListener(CommandID.SUPER_EVOLUTION,onSuperHandler);
            SocketConnection.send(CommandID.SUPER_EVOLUTION,_catchTime);
         }
         else
         {
            Alarm.show("只要将珀伽索斯任意形态放入背包，就可以进行超进化哦！");
         }
      }
      
      public static function superTask() : void
      {
         SocketConnection.addCmdListener(CommandID.SUPER_EVOLUTION_STATE,onStateHandler);
         SocketConnection.send(CommandID.SUPER_EVOLUTION_STATE);
      }
      
      private static function onStateHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SUPER_EVOLUTION_STATE,onStateHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _statePo = _loc2_.readUnsignedInt();
         if(_statePo != 0)
         {
            Alarm.show("珀伽索斯已经超进化成功了哦！");
         }
         else
         {
            getHaveJinyuan();
         }
      }
      
      private static function getHaveJinyuan() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         SocketConnection.send(CommandID.ITEM_LIST,400246,400246,2);
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            _ishaveJinyuan = false;
         }
         else
         {
            _loc4_ = _loc2_.readUnsignedInt();
            if((_loc5_ = _loc2_.readUnsignedInt()) > 0)
            {
               _ishaveJinyuan = true;
            }
         }
         getHaveDaoju();
      }
      
      private static function getHaveDaoju() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler2);
         SocketConnection.send(CommandID.ITEM_LIST,1200035,1200035,2);
      }
      
      private static function onItemCountHandler2(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler2);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            _ishaveDaoju = false;
         }
         else
         {
            _loc4_ = _loc2_.readUnsignedInt();
            if((_loc5_ = _loc2_.readUnsignedInt()) > 0)
            {
               _ishaveDaoju = true;
            }
         }
         onSuper();
      }
      
      private static function onSuper() : void
      {
         if(_ishaveDaoju)
         {
            if(_ishaveJinyuan)
            {
               Alarm.show("珀伽索斯的精元就在你的背包里，快去基地小屋孵化精元吧！",function():void
               {
                  MapManager.changeMap(MainManager.actorInfo.userID);
               });
            }
            else
            {
               getHavePet();
            }
         }
         else
         {
            Alarm.show("你还未获得天马进化能量，暂时不能为珀伽索斯超进化哦！");
         }
      }
      
      private static function onSuperHandler(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SUPER_EVOLUTION,onSuperHandler);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_935_2"),function():void
         {
            Alarm.show("恭喜，你的珀伽索斯已成功超进化为圣光天马！");
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:uint = 0;
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         if(_map)
         {
            SocketConnection.removeCmdListener(CommandID.SAVE_TIANMA_FOLWERSTATE,onFolwerStateHandler);
            if(_mcBulu)
            {
               _mcBulu.removeEventListener(MouseEvent.CLICK,onBuluClick);
               _mcBulu.removeEventListener(MouseEvent.CLICK,onBuluClick2);
            }
            if(_mcTianma)
            {
               _mcTianma.removeEventListener(MouseEvent.CLICK,onTianmaClick);
               _mcTianma.removeEventListener(MouseEvent.CLICK,onTianmaClick2);
            }
            if(_mcYier)
            {
               _mcYier.removeEventListener(MouseEvent.CLICK,onYierClick);
            }
            if(_map.conLevel["ad"])
            {
               _map.conLevel["ad"].removeEventListener(MouseEvent.CLICK,onAdClick);
            }
            _loc1_ = 0;
            while(_loc1_ < 4)
            {
               if(_map.conLevel["flower_" + _loc1_])
               {
                  _map.conLevel["flower_" + _loc1_].removeEventListener(MouseEvent.CLICK,onFlowerClick);
               }
               ToolTipManager.remove(_map.conLevel["flower_" + _loc1_]);
               _loc1_++;
            }
         }
         _mcForMap693 = null;
         _mcBulu = null;
         _mcTianma = null;
         _mcYier = null;
         _map = null;
      }
   }
}
