package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class LookForSonOfMoonStep2Controller
   {
      
      private static var _step:int;
      
      private static var _colletionNum:int;
      
      private static var _currentMc:MovieClip;
      
      private static var _currentBufferArr:Array = [22949,22950,22951,22952,22953,22954,22957];
      
      private static var _bossName:Array = ["荧光草","咕咕芽","怀尔泰普","卡亚斯"];
      
      private static var _bossId:Array = [5591,5592,5593,5594];
      
      private static var _map:MapModel;
      
      private static var _caoyaoName:Array = ["回神草","砰砰芽","凤灵藤","奎尔花"];
      
      private static var _npcId:Array = [2458,227,2459,2007];
      
      private static var _evenCom:EventComponent = new EventComponent();
       
      
      public function LookForSonOfMoonStep2Controller()
      {
         super();
      }
      
      public static function hideIcon() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         MapManager.currentMap.btnLevel.visible = false;
         MapManager.currentMap.depthLevel.visible = false;
         ToolBarController.panel.hide();
         KTool.showMapAllPlayerAndMonster(false);
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      public static function showIcon() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         MapManager.currentMap.btnLevel.visible = true;
         MapManager.currentMap.depthLevel.visible = true;
         ToolBarController.panel.show();
         KTool.showMapAllPlayerAndMonster(true);
         MapObjectControl.hideOrShowAllObjects(true);
         if(Boolean(_currentMc) && Boolean(_currentMc.parent))
         {
            _currentMc.parent.removeChild(_currentMc);
         }
      }
      
      private static function loadMapMovie(param1:int, param2:Function = null) : void
      {
         var i:int = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getMapAnimate("LookForSonOfMoon2"),function(param1:MovieClip):void
         {
            if(Boolean(_currentMc) && Boolean(_currentMc.parent))
            {
               _currentMc.parent.removeChild(_currentMc);
            }
            _currentMc = param1;
            hideIcon();
            MapManager.currentMap.topLevel.addChild(_currentMc);
            if(fun != null)
            {
               fun(i);
            }
         });
      }
      
      public static function taskProcess(param1:int) : void
      {
         var story:TaskStoryPlayer;
         var i:int = param1;
         if(_currentMc == null || _currentMc.parent == null)
         {
            loadMapMovie(i,taskProcess);
            return;
         }
         hideIcon();
         story = new TaskStoryPlayer();
         story.useNewDialog = true;
         NpcDialogNew_1._HasDanmu = false;
         if(_map != null)
         {
            _map.controlLevel.visible = false;
         }
         switch(i)
         {
            case 0:
               story.addMapMovie([_currentMc,1,"mc0"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["唔，这一次的占卜结果极为清晰……"]]);
               story.addDialog([NPC.SAIXIAOXI,["那真是太好了，第二块碎片现在在哪里？"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["第二块碎片，就在沼泽的底下。而以我所知，附近唯一的沼泽所在，就是痛苦沼泽了。"]]);
               story.addDialog([NPC.KALULU,["可是……沼泽底下？那我们该怎么把这块碎片找到并打捞上来啊？"]]);
               story.addDialog([NPC.SAIXIAOXI,["哎呀，先不管这么多。车到山前必有路，我们先赶紧去痛苦沼泽吧！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  MapManager.currentMap.depthLevel.visible = false;
                  BitBuffSetClass.setState(_currentBufferArr[0],1,function():void
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":1});
                  });
               });
               break;
            case 1:
               story.addMapMovie([_currentMc,9,"mc8"],null,null);
               story.addDialog([NPC.BO_QIE_ER,["先知大人！感谢泰坦，我居然又碰到了您。"]]);
               story.addDialog([NPC.BO_QIE_ER,["上一次您帮助我们族人寻找到新的栖息地，我们都很感激您。如果不是您，我们可能已经迷失在了旷野之中。"]]);
               story.addDialog([NPC.BO_QIE_ER,["您的大恩大德，我们每一个族人都铭记在心。如果您需要什么帮助的话，赴汤蹈火，在所不辞！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["你好啊，波切尔。看来你们一族已经适应了在此地的生活。"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["这一次，我可能还真的需要你来帮助我一下呢。"]]);
               story.addDialog([NPC.BO_QIE_ER,["恩人请讲！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["我的这位小友在此地遗失了一样东西，根据我的占卜，那样东西现在就在此地的沼泽底部。我们需要找一只精灵来帮忙，潜入沼泽底部，将那样东西带上来。"]]);
               story.addDialog([NPC.KILLUA,["奇牙！奇牙!"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["那是一块碎片，原本是一条项链中的一部分。"]]);
               story.addDialog([NPC.BO_QIE_ER,["小事一桩，这个您可以放心交给我！在沼泽中穿梭，可是我们的特长！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["那就辛苦你了。"]]);
               story.addDialog([NPC.KILLUA,["奇牙！"]]);
               story.addMapMovie([_currentMc,2,"mc1"],function():void
               {
                  _currentMc.visible = true;
               },null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["你们的运气真的很不错。波切尔一族是最近才搬来这附近的，它们天生拥有着在沼泽中穿梭的能力。"]]);
               story.addDialog([NPC.SAIXIAOXI,["看来，这一次奇牙的项链碎片可以很轻松地拿到了。"]]);
               story.addDialog([NPC.KILLUA,["奇牙！奇牙！"]]);
               story.addDialog([NPC.KALULU,["我们不如去采摘一些果子，等波切尔回来的时候给它吃吧。这么大的沼泽找一个小碎片，它一定累坏了。"]]);
               story.addDialog([NPC.ATIEDA,["卡璐璐真是贴心！波切尔正在辛苦，我们也不能太亏待了它不是！"]]);
               story.addDialog([NPC.SAIXIAOXI,["好，我看风语之森就有很多果子，我们去采摘一些回来吧！"]]);
               story.addDialog([NPC.ATIEDA,["我们走！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  taskOver(1,function():void
                  {
                     BitBuffSetClass.setState(_currentBufferArr[1],1,function():void
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":2});
                     });
                  });
               });
               break;
            case 2:
               if(Boolean(_map) && _map.id == 10996)
               {
                  _map.controlLevel["pet"].visible = false;
               }
               _currentMc.visible = false;
               _map.controlLevel.visible = true;
               story.addDialog([NPC.KALULU,["好啦，树莓都采摘的差不多了，我们也该回去了。"]]);
               story.addDialog([NPC.SAIXIAOXI,["恩！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  getState(function():void
                  {
                     if(_step == 1)
                     {
                        taskOver(2,function():void
                        {
                           BitBuffSetClass.setState(_currentBufferArr[2],1,function():void
                           {
                              ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":3});
                           });
                        });
                     }
                     else
                     {
                        BitBuffSetClass.setState(_currentBufferArr[2],1,function():void
                        {
                           ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":3});
                        });
                     }
                  });
               });
               break;
            case 3:
               story.addMapMovie([_currentMc,3,"mc2"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["这……这不是项链碎片，而是一块被灌输了污染之力的碎片！"]]);
               story.addDialog([NPC.KALULU,["什么，污染？"]]);
               story.addDialog([NPC.ATIEDA,["也就是说，这里以前其实并不是沼泽，只是被人污染了，才变成了现在的样子！"]]);
               story.addDialog([NPC.SAIXIAOXI,["是谁，如此可恶！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["没工夫讨论这些了，我们得快点治疗波切尔。它处在爆炸中心，伤得很重。"]]);
               story.addDialog([NPC.SAIXIAOXI,["我们得赶紧去找派特博士，他一定能治好波切尔！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  taskOver(3,function():void
                  {
                     BitBuffSetClass.setState(_currentBufferArr[3],1,function():void
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":4});
                     });
                  });
               });
               break;
            case 4:
               story.addMapMovie([_currentMc,4,"mc3"],null,null);
               story.addDialog([NPC.BO_SHI_PAI_TE,["好严重的污染之力……它似乎伤的不轻啊。"]]);
               story.addDialog([NPC.KALULU,["博士，它是为了帮助我们才伤成这样的，你要救救它啊！呜呜呜呜……"]]);
               story.addDialog([NPC.BO_SHI_PAI_TE,["好了好了，卡璐璐，不要着急……它其实主要是被大量的污染之力所冲击，只要将它体内的污染力量驱逐出来，它就可以恢复了。"]]);
               story.addDialog([NPC.BO_SHI_PAI_TE,["我最近培养了一些特殊的草药，可以制作出具有这种功效的药物来。让我想想……恩，你们帮我去培养基地，拿一些回神草、砰砰芽、凤灵藤和奎尔花回来吧。"]]);
               story.addDialog([NPC.ATIEDA,["好的博士，我这就去！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  taskOver(4,function():void
                  {
                     BitBuffSetClass.setState(_currentBufferArr[4],1,function():void
                     {
                        _map.controlLevel.visible = true;
                        _map.topLevel.visible = false;
                        ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":5});
                     });
                  });
               });
               break;
            case 5:
               _map.topLevel.visible = true;
               story.addMapMovie([_currentMc,10,"mc9"]);
               story.addDialog([NPC.ATIEDA,["给，博士！草药都收齐了！"]]);
               story.addDialog([NPC.BO_SHI_PAI_TE,["好的，你们稍等我一下，我这就去把药制作出来。"]]);
               story.addMapMovie([_currentMc,5,"mc4"],null);
               story.addDialog([NPC.KALULU,["太棒了，它醒过来了！"]]);
               story.addDialog([NPC.BO_QIE_ER,["各位对不起，我没能把你们需要的东西带回来。"]]);
               story.addDialog([NPC.SAIXIAOXI,["哪里的话，你是为了帮我们才受伤的，过意不去的是我们，我们怎么会怪罪你呢？"]]);
               story.addDialog([NPC.BO_QIE_ER,["我已经恢复了！让我回去再找一次吧，这一次我会避开那些有着邪恶能量的东西的！"]]);
               story.addDialog([NPC.KALULU,["危险且不说，沼泽这么大，你怎么才能知道，哪一个是我们要找的东西呢？"]]);
               story.addDialog([NPC.BO_QIE_ER,["这……"]]);
               story.addDialog([NPC.BO_QIE_ER,["你们有没有什么与这块碎片相近的东西，可以让我对它有一个概念？"]]);
               story.addDialog([NPC.SAIXIAOXI,["对呀，你这么一说，我之前还真忘了！奇牙，给它看看我们的第一块碎片吧！"]]);
               story.addDialog([NPC.KILLUA,["奇牙！"]]);
               story.addMapMovie([_currentMc,6,"mc5"],null,null);
               story.addDialog([NPC.SAIXIAOXI,["就是跟这块碎片差不多的一块碎片！"]]);
               story.addDialog([NPC.BO_QIE_ER,["啊……这温柔的自然力量……我懂了！"]]);
               story.addDialog([NPC.BO_QIE_ER,["你们放心，这一次，我一定不会弄错！走吧，我们回去！"]]);
               story.addDialog([NPC.KALULU,["你可千万要小心啊……"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  taskOver(6,function():void
                  {
                     BitBuffSetClass.setState(_currentBufferArr[5],1,function():void
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":7});
                     });
                  });
               });
               break;
            case 6:
               story.addMapMovie([_currentMc,7,"mc6"],null,null);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["希望这一次，它能够平安的回来。"]]);
               story.addDialog([NPC.SAIXIAOXI,["它这么尽力地帮助我们，我们实在是欠它很多。"]]);
               story.addDialog([NPC.ATIEDA,["哼，让我知道是谁污染了这片水域，我非揍扁他不可！"]]);
               story.addDialog([NPC.KALULU,["等会回去，我就去请教肖恩博士，看看他能不能制作出什么机器，让这里重新恢复生机！"]]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["不能再让这些污染碎片伤害无辜的人了……"]]);
               story.addDialog([NPC.ATIEDA,["嗯？它回来了！"]]);
               story.addMapMovie([_currentMc,8,"mc7"],null,null);
               story.addFulMovie(["LookForSonOfMoon_fullMovie",true]);
               story.addDialog([NPC.SHEN_MI_REN_YUE,["波切尔，这一次，我欠你一个人情。"]]);
               story.addDialog([NPC.SAIXIAOXI,["如果你将来遇到什么事情需要我们帮助，尽管来找我们！"]]);
               story.addDialog([NPC.ATIEDA,["能遇到你这样的朋友，是我们的幸运。"]]);
               story.addDialog([NPC.KALULU,["谢谢你！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  BonusController.addDelay(1596);
                  taskOver(7,function():void
                  {
                     destroy();
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showAppModule("LookForSonOfMoonPanel");
                     });
                  });
               });
               break;
            case 7:
               _currentMc.visible = false;
               _map.controlLevel.visible = true;
               story.addDialog([NPC.SAIXIAOXI,["草药都在这里！我们快去把它们拿给博士吧！"]]);
               story.addDialog([NPC.KALULU,["可是好像有精灵看守着他们呢……"]]);
               story.addDialog([NPC.ATIEDA,["没事儿！包在我身上！"]],null,function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  showIcon();
                  BitBuffSetClass.setState(_currentBufferArr[6],1);
               });
         }
         story.start();
      }
      
      private static function clickNpc(param1:int, param2:int) : void
      {
         var npcId:int = param1;
         var i:int = param2;
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(npcId,["你们是谁？你们想干什么？"],null,null,false,function():void
         {
            NpcDialogNew_1.show(NPC.SAIXIAOXI,["你好，博士迫切地需要这些草药，能给我们一些吗？"],null,null,false,function():void
            {
               NpcDialogNew_1.show(npcId,["我可不相信你们！想要草药？先过我这关！"],["那就对不住了！","那我不要了。"],[function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
                  fightTo(i);
               },function():void
               {
                  NpcDialogNew_1._HasDanmu = true;
               }]);
            });
         });
      }
      
      private static function fightTo(param1:int) : void
      {
         var i:int = param1;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            _map = MapManager.currentMap;
            _evenCom.addClickEvent(_map.controlLevel,onClick);
            getColletionState(function():void
            {
               var _loc2_:* = false;
               var _loc1_:int = 0;
               while(_loc1_ < 4)
               {
                  _loc2_ = KTool.getBit(_colletionNum,_loc1_ + 1) == 0;
                  _map.controlLevel["pet_" + _loc1_].visible = _loc2_;
                  _map.controlLevel["pet_" + _loc1_].buttonMode = _loc2_;
                  _loc1_++;
               }
            });
         });
         FightManager.fightNoMapBoss(_bossName[i],_bossId[i],false,true,function():void
         {
            if(!FightManager.isWin)
            {
               return;
            }
            ++_colletionNum;
            Alarm.show("你获得了" + _caoyaoName[i] + "！",function():void
            {
               getColletionState(function():void
               {
                  if(_colletionNum >= 15)
                  {
                     openMsgPanel();
                  }
               });
            });
         });
      }
      
      public static function taskOver(param1:int, param2:Function) : void
      {
         var taskId:int = param1;
         var callback:Function = param2;
         SocketConnection.sendWithCallback2(43666,function(param1:SocketEvent):void
         {
            callback();
         },[1,taskId]);
      }
      
      public static function openMsgPanel() : void
      {
         getState(function():void
         {
            switch(_step)
            {
               case 0:
                  if(!getBufferState(0))
                  {
                     changeMap(10992,function():void
                     {
                        taskProcess(0);
                     });
                  }
                  else
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":1});
                  }
                  break;
               case 1:
                  ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":2});
                  break;
               case 2:
                  ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":3});
                  break;
               case 3:
                  if(!getBufferState(3))
                  {
                     taskProcess(3);
                  }
                  else
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":4});
                  }
                  break;
               case 4:
                  if(!getBufferState(3))
                  {
                     taskProcess(3);
                  }
                  else
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":5});
                  }
                  break;
               case 5:
                  ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":6});
                  break;
               case 6:
                  if(!getBufferState(6))
                  {
                     taskProcess(6);
                  }
                  else
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonStep2MsgPanel",{"frame":7});
                  }
            }
         });
      }
      
      public static function changeMap(param1:int, param2:Function = null) : void
      {
         var mapid:int = param1;
         var func:Function = param2;
         if(mapid == MapManager.currentMap.id)
         {
            if(func != null)
            {
               func();
            }
            return;
         }
         MapManager.changeMapWithCallback(mapid,function():void
         {
            var i:int = 0;
            _map = MapManager.currentMap;
            if(_map.id == 10996)
            {
               _colletionNum = 0;
               CommonUI.addYellowExcal(_map.controlLevel["pet"],54,-47);
               _map.controlLevel["pet"].buttonMode = true;
               _map.controlLevel["pet"].mouseChildren = false;
            }
            else if(_map.id == 10997)
            {
               if(_colletionNum >= 6)
               {
                  taskProcess(2);
               }
               else
               {
                  i = 0;
                  while(i < 6)
                  {
                     if(i < _colletionNum)
                     {
                        _map.controlLevel["shumei_" + i].gotoAndStop(2);
                        _map.controlLevel["shumei_" + i].mouseEnabled = false;
                     }
                     else
                     {
                        _map.controlLevel["shumei_" + i].gotoAndStop(1);
                        _map.controlLevel["shumei_" + i].buttonMode = true;
                     }
                     i++;
                  }
               }
            }
            else if(_map.id == 10999)
            {
               if(!getBufferState(6))
               {
                  _colletionNum = 0;
                  taskProcess(7);
               }
               getColletionState(function():void
               {
                  var _loc2_:* = false;
                  if(_colletionNum == 15)
                  {
                     openMsgPanel();
                  }
                  var _loc1_:int = 0;
                  while(_loc1_ < 4)
                  {
                     _loc2_ = KTool.getBit(_colletionNum,_loc1_ + 1) == 0;
                     _map.controlLevel["pet_" + _loc1_].visible = _loc2_;
                     _map.controlLevel["pet_" + _loc1_].buttonMode = _loc2_;
                     _loc1_++;
                  }
               });
            }
            _evenCom.addClickEvent(_map.controlLevel,onClick);
            if(func != null)
            {
               func();
            }
         });
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(param1.target is SimpleButton)
         {
            _loc2_ = String(param1.target.parent.name);
         }
         var _loc3_:int = 0;
         if(_loc2_ == "pet")
         {
            CommonUI.removeYellowExcal(_map.controlLevel["pet"]);
            taskProcess(1);
         }
         else if(_loc2_.indexOf("shumei_") != -1)
         {
            _loc3_ = parseInt(_loc2_.replace("shumei_",""));
            Alarm.show("你采集到了一小捧多汁的树莓。");
            ++_colletionNum;
            _map.controlLevel["shumei_" + _loc3_].gotoAndStop(2);
            _map.controlLevel["shumei_" + _loc3_].mouseEnabled = false;
            if(_colletionNum >= 6)
            {
               taskProcess(2);
            }
         }
         else if(_loc2_.indexOf("pet_") != -1)
         {
            _loc3_ = parseInt(_loc2_.replace("pet_",""));
            clickNpc(_npcId[_loc3_],_loc3_);
         }
      }
      
      public static function getState(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([5976],function(param1:Array):void
         {
            _step = param1[0];
            if(func != null)
            {
               func();
            }
         });
      }
      
      private static function getColletionState(param1:Function) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([5981],function(param1:Array):void
         {
            _colletionNum = param1[0];
            if(func != null)
            {
               func();
            }
         });
      }
      
      private static function getBufferState(param1:int) : Boolean
      {
         return BitBuffSetClass.getState(_currentBufferArr[param1]);
      }
      
      public static function destroy() : void
      {
         if(_map != null)
         {
            _map = null;
         }
         _evenCom.destroy();
         _evenCom = null;
         if(Boolean(_currentMc) && Boolean(_currentMc.parent))
         {
            _currentMc.parent.removeChild(_currentMc);
         }
      }
   }
}
