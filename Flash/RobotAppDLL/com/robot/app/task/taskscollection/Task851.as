package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task851
   {
      
      private static const _activeTime:CronTimeVo = new CronTimeVo("*","*","7-13","8","*","2015");
      
      private static const _dateStr:String = "8月7日-8月13日";
      
      private static const _endLine:String = "8月13日";
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      public static var _property:Array = ["金","水","暗","土","光","木","火"];
      
      private static var _pets:Array = ["TOH","海魂","撒格利加","鲁加斯","卡瑞","宾尼纳拉","烈火雀"];
      
      private static var _energy:Array = ["金色","蓝色","黑色","褐色","亮光","木塑","火焰"];
      
      private static var _count:Array = ["20","20","15","15","18","18","18"];
      
      private static var _mapList:Array = [60,696,692,694,476,404,15];
      
      private static var _petList:Array = ["伊娃","纳克","黑布罗","小岩怪","丽萨克","克洛洛特","火焰贝"];
      
      public static var _npcList:Array = [NPC.TOH,NPC.HAIHUN,NPC.SAGELIJIA,NPC.LUJIASHI,NPC.KARUI,NPC.BINNINALA,NPC.LIEHUOQUE];
      
      public static var _lightStatus:Array = [true,true,true,true,true,true,true];
      
      public static var _clickIndex:uint;
      
      private static var _isLightAll:Boolean;
      
      public static var _isFightNPC:Boolean;
      
      public static var _currentMapID:uint;
      
      public static var _flag:Boolean;
      
      private static var n:int;
       
      
      public function Task851()
      {
         super();
      }
      
      public static function initFor699(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(851);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               beforeTask();
               break;
            case TasksManager.ALR_ACCEPT:
               startTask();
               break;
            case TasksManager.COMPLETE:
               setMagicCircle();
         }
      }
      
      private static function beforeTask() : void
      {
         CommonUI.addYellowExcal(_map.depthLevel["dandi"],0,-80,1.2);
         _map.depthLevel["dandi"].visible = true;
         _map.depthLevel["dandi"].buttonMode = true;
         _map.depthLevel["dandi"].addEventListener(MouseEvent.CLICK,onClickDandi);
      }
      
      private static function onClickDandi(param1:Event) : void
      {
         TasksManager.accept(851,startTask);
      }
      
      private static function startTask(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         CommonUI.removeYellowExcal(_map.depthLevel["dandi"]);
         _map.depthLevel["dandi"].buttonMode = false;
         _map.depthLevel["dandi"].removeEventListener(MouseEvent.CLICK,onClickDandi);
         NpcDialog.show(NPC.DANDI,["不好啦！0xff0000元素之阵0xffffff已被激活了，怎么办！！！没有了元素之星的推特星，将会发生怎样的变化呢？"],["元素之阵？？"],[function():void
         {
            NpcDialog.show(NPC.DANDI,["小赛尔，你有所不知啊！每当7颗元素之星聚集到一起的时候，神奇的事情就会发生！！！都怪0xff0000萨菲罗0xffffff这家伙…"],["为什么元素之星会在这里出现呢？"],[function():void
            {
               NpcDialog.show(NPC.DANDI,["这个说来话长，其实0xff0000萨菲罗0xffffff很久之前就计划抢夺所有的元素之星，目的就是利用元素之星的神奇能量恢复诺可撒斯星的生机！"],["不过…."],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_851_1"),function():void
                  {
                     NpcDialog.show(NPC.DANDI,["0xff0000萨菲罗0xffffff为了拯救自己的故乡，竟然不顾一切的闯入元素之阵，随后爆发自己的全部能量，为的就是不让自己的星球继续枯萎下去！"],["这么说来，萨菲罗还是挺善良的！"],[function():void
                     {
                        NpcDialog.show(NPC.DANDI,["不过，单单找到元素之星依然无法开启元素之阵，因为这里不是推特星，必须要有0xff0000七种不同的能量元素0xffffff才行！！"],null,null,false,function():void
                        {
                           _map.topLevel["act"].visible = true;
                           AnimateManager.playMcAnimate(_map.topLevel["act"],1,"",function():void
                           {
                              _map.topLevel["bulaike"].visible = true;
                              _map.topLevel["kaxiusi"].visible = true;
                              _map.topLevel["leiyi"].visible = true;
                              _map.topLevel["gaiya"].visible = true;
                              DisplayUtil.removeForParent(_map.topLevel["act"]);
                              NpcDialog.show(NPC.LEIYI,["赛尔，这里就交给我们吧！你快去寻找传说中的0xff0000七种不同的能量元素0xffffff，否则就来不及了！"],["恩恩，我这就去！"],[function():void
                              {
                                 NpcDialog.show(NPC.DANDI,["赛尔，你要尽快啊！如果不能在0xff0000" + _endLine + "0xffffff前找到0xff0000七种不同的能量元素0xffffff，那么推特星和诺可撒斯星的命运可就难说了！"],["这次一定要完成使命的！"],[function():void
                                 {
                                    CommonUI.addYellowArrow(_map.topLevel,550,200,225);
                                    _map.conLevel["safeiluo"].buttonMode = true;
                                    _map.conLevel["safeiluo"].addEventListener(MouseEvent.CLICK,onClickAlter);
                                 }]);
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function onClickAlter(param1:Event) : void
      {
         var e:Event = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.conLevel["safeiluo"].buttonMode = false;
         _map.conLevel["safeiluo"].removeEventListener(MouseEvent.CLICK,onClickAlter);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_851_2"),function():void
         {
            TasksManager.complete(851,0,setMagicCircle);
         });
      }
      
      private static function setMagicCircle(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         _map.topLevel["bulaike"].visible = true;
         _map.topLevel["kaxiusi"].visible = true;
         _map.topLevel["leiyi"].visible = true;
         _map.topLevel["gaiya"].visible = true;
         dandiDialog();
         SocketConnection.addCmdListener(CommandID.GET_LIGHT_STATUS,onGetStatus);
         SocketConnection.send(CommandID.GET_LIGHT_STATUS);
      }
      
      private static function onGetStatus(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedByte();
         _isLightAll = true;
         _loc5_ = 0;
         while(_loc5_ < 7)
         {
            if((_loc4_ = uint(_loc3_ & 1)) == 1)
            {
               _map.conLevel["circle" + _loc5_].gotoAndStop(5);
               _map.btnLevel["circle" + _loc5_].visible = false;
               _map.btnLevel["temp" + _loc5_].visible = true;
               _lightStatus[_loc5_] = true;
            }
            else
            {
               _isLightAll = false;
               _map.btnLevel["circle" + _loc5_].visible = true;
               _map.btnLevel["temp" + _loc5_].visible = false;
               _lightStatus[_loc5_] = false;
            }
            _map.btnLevel["circle" + _loc5_].addEventListener(MouseEvent.CLICK,onClickCircle);
            _loc3_ >>= 1;
            _loc5_++;
         }
         if(_isLightAll)
         {
            afterLightAll();
         }
      }
      
      private static function onClickCircle(param1:Event) : void
      {
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         _clickIndex = uint(param1.currentTarget.name.slice(6));
         switch(_clickIndex)
         {
            case 0:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400792,400792,2);
               break;
            case 1:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400793,400793,2);
               break;
            case 2:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400794,400794,2);
               break;
            case 3:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400795,400795,2);
               break;
            case 4:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400796,400796,2);
               break;
            case 5:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400797,400797,2);
               break;
            case 6:
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem0);
               SocketConnection.send(CommandID.ITEM_LIST,400798,400798,2);
         }
      }
      
      private static function onCheckItem0(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var count:uint;
         var i:int = 0;
         var info:SingleItemInfo = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItem0);
         data = e.data as ByteArray;
         count = data.readUnsignedInt();
         i = 0;
         while(i < count)
         {
            info = new SingleItemInfo(data);
            if(info.itemNum > 0)
            {
               SocketConnection.addCmdListener(CommandID.ELEMENT_CIRCLE_LIGHT,onLight);
               SocketConnection.send(CommandID.ELEMENT_CIRCLE_LIGHT,_clickIndex);
            }
            i++;
         }
         if(count == 0)
         {
            KTool.getFrameMc(_map.conLevel["circle" + _clickIndex],2,"",function(param1:MovieClip):void
            {
               var child:MovieClip = param1;
               AnimateManager.playMcAnimate(child,1,"",function():void
               {
                  switch(_clickIndex)
                  {
                     case 0:
                        NpcDialog.show(NPC.TOH,["我是守护金元素之阵的0xff0000TOH0xffffff，想激活金元素之星就一定要寻找0xff00001个金色元素能量0xffffff，你可以在0xff0000塔克星0xffffff的0xff0000伊娃0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(60);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                        break;
                     case 1:
                        NpcDialog.show(NPC.HAIHUN,["我是守护水元素之阵的0xff0000海魂0xffffff，想激活水元素之星就一定要寻找到0xff0000蓝色元素能量0xffffff，你可以在0xff0000结晶岩洞0xffffff的0xff0000纳克0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(696);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                        break;
                     case 2:
                        NpcDialog.show(NPC.SAGELIJIA,["我是守护暗元素之阵的0xff0000撒格利加0xffffff，想激活暗元素之星就一定要寻找到0xff0000黑色元素能量0xffffff，你可以在0xff0000暗物质神殿0xffffff的0xff0000黑布罗0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(692);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                        break;
                     case 3:
                        NpcDialog.show(NPC.LUJIASHI,["我是守护土元素之阵的0xff0000鲁加斯0xffffff，想激活土元素之星就一定要寻找到0xff0000褐色元素能量0xffffff，你可以在0xff0000新泽部落0xffffff的0xff0000小岩怪0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(694);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                        break;
                     case 4:
                        NpcDialog.show(NPC.KARUI,["我是守护光元素之阵的0xff0000卡瑞0xffffff，想激活光元素之星就一定要寻找到0xff0000亮光元素能量0xffffff，你可以在0xff0000阳光大地0xffffff的0xff0000丽萨克0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(476);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                        break;
                     case 5:
                        NpcDialog.show(NPC.BINNINALA,["我是守护木光素之阵的0xff0000宾尼纳拉0xffffff，想激活木元素之星就一定要寻找到0xff0000木塑元素能量0xffffff，你可以在0xff0000比格星0xffffff的0xff0000克洛洛特0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(404);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                        break;
                     case 6:
                        NpcDialog.show(NPC.LIEHUOQUE,["我是守护火元素之阵的0xff0000烈火雀0xffffff，想激活火元素之星就一定要寻找到0xff0000火焰元素能量0xffffff，你可以在0xff0000火山星0xffffff的0xff0000火焰贝0xffffff身上找到！"],["恩，我现在就去！","去附近看看其他元素之星！"],[function():void
                        {
                           MapManager.changeMap(15);
                        },function():void
                        {
                           _map.conLevel["circle" + _clickIndex].gotoAndStop(3);
                        }]);
                  }
               });
            });
         }
      }
      
      private static function onLight(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var status:uint;
         var bit:uint = 0;
         var i:int = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ELEMENT_CIRCLE_LIGHT,onLight);
         AnimateManager.playMcAnimate(_map.conLevel["circle" + _clickIndex],4,"mc4",function():void
         {
            _map.conLevel["circle" + _clickIndex].gotoAndStop(5);
            NpcDialog.show(_npcList[_clickIndex],["不错，你已经成功点亮了0xff0000" + _property[_clickIndex] + "元素之星0xffffff，如果想要挑战我们这些元素守护者的话，那么就要在0xff0000" + _dateStr + "0xffffff，点亮所有的元素之星才行！你准备好了吗？"],["恩，我知道了！"],[]);
         });
         _map.btnLevel["circle" + _clickIndex].visible = false;
         _map.btnLevel["temp" + _clickIndex].visible = true;
         data = e.data as ByteArray;
         status = data.readUnsignedByte();
         _isLightAll = true;
         i = 0;
         while(i < 7)
         {
            bit = uint(status & 1);
            if(bit == 0)
            {
               _isLightAll = false;
               _lightStatus[i] = false;
            }
            else
            {
               _lightStatus[i] = true;
            }
            status >>= 1;
            i++;
         }
         if(_isLightAll)
         {
            afterLightAll();
         }
      }
      
      private static function afterLightAll() : void
      {
         var _loc1_:int = 0;
         _loc1_ = 0;
         while(_loc1_ < 7)
         {
            if(TasksManager.getTaskStatus(858 + _loc1_) == TasksManager.COMPLETE)
            {
               _map.btnLevel["circle" + _loc1_].visible = false;
            }
            else
            {
               _map.btnLevel["circle" + _loc1_].visible = true;
            }
            _map.btnLevel["temp" + _loc1_].visible = false;
            _map.btnLevel["circle" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickCircle);
            _map.btnLevel["circle" + _loc1_].addEventListener(MouseEvent.CLICK,onClickCircle1);
            _loc1_++;
         }
      }
      
      private static function onClickCircle1(param1:Event) : void
      {
         _clickIndex = uint(param1.currentTarget.name.slice(6));
         if(_activeTime.isActive(SystemTimerManager.sysBJDate))
         {
            SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem1);
            SocketConnection.send(CommandID.ITEM_LIST,400792 + _clickIndex,400792 + _clickIndex,2);
         }
         else
         {
            NpcDialog.show(_npcList[_clickIndex],["小赛尔，如果想保持" + _property[_clickIndex] + "元素之星的光芒，就必须寻找到0xff0000" + _count[_clickIndex] + "个" + _energy[_clickIndex] + "元素能量0xffffff！记得0xff0000" + _dateStr + "0xffffff，来这里找我！"],["恩，我这就去收集！"],[]);
         }
      }
      
      private static function onCheckItem1(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var count:uint;
         var enough:uint;
         var i:int = 0;
         var info:SingleItemInfo = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItem1);
         data = e.data as ByteArray;
         count = data.readUnsignedInt();
         enough = uint(_count[_clickIndex]);
         i = 0;
         while(i < count)
         {
            info = new SingleItemInfo(data);
            if(info.itemNum < enough)
            {
               NpcDialog.show(_npcList[_clickIndex],["你好像还没有收集全哦！快去" + MapXMLInfo.getName(_mapList[_clickIndex]) + "的" + _petList[_clickIndex] + "身上寻找到" + _count[_clickIndex] + "个" + _energy[_clickIndex] + "元素能量吧！" + _property[_clickIndex] + "元素之星的光芒正在慢慢变淡！"],["前往" + MapXMLInfo.getName(_mapList[_clickIndex]) + "！"],[function():void
               {
                  MapManager.changeMap(_mapList[_clickIndex]);
               }]);
            }
            else
            {
               NpcDialog.show(_npcList[_clickIndex],["果然神速，既然这样那就接受我的试炼吧！如果你能击败我，我就将" + _pets[_clickIndex] + "精元送给你！"],["真的吗？说到做到哦！","等等再挑战你。"],[function():void
               {
                  SocketConnection.addCmdListener(CommandID.CHALLENGE_GUARDIAN,onStartChallenge);
                  SocketConnection.send(CommandID.CHALLENGE_GUARDIAN,_clickIndex);
               }]);
            }
            i++;
         }
         if(count == 0)
         {
            NpcDialog.show(NPC.SEER,["你好像还没有收集全哦！快去" + MapXMLInfo.getName(_mapList[_clickIndex]) + "的" + _petList[_clickIndex] + "身上寻找到" + _count[_clickIndex] + "个" + _energy[_clickIndex] + "元素能量吧！" + _property[_clickIndex] + "元素之星的光芒正在慢慢变淡！"],["前往" + MapXMLInfo.getName(_mapList[_clickIndex]) + "！"],[function():void
            {
               MapManager.changeMap(_mapList[_clickIndex]);
            }]);
         }
      }
      
      private static function onStartChallenge(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHALLENGE_GUARDIAN,onStartChallenge);
         FightManager.fightWithBoss(_pets[_clickIndex],_clickIndex + 14);
      }
      
      public static function checkGetStatus() : void
      {
         _currentMapID = new uint(MapManager.currentMap.id);
         SocketConnection.addCmdListener(CommandID.ITEM_BUY,onGetItem);
         if(_currentMapID == 60 && !_lightStatus[0])
         {
            n = 0;
         }
         else if(_currentMapID == 696 && !_lightStatus[1])
         {
            n = 1;
         }
         else if(_currentMapID == 692 && !_lightStatus[2])
         {
            n = 2;
         }
         else if(_currentMapID == 694 && !_lightStatus[3])
         {
            n = 3;
         }
         else if(_currentMapID == 476 && !_lightStatus[4])
         {
            n = 4;
         }
         else if(_currentMapID == 404 && !_lightStatus[5])
         {
            n = 5;
         }
         else if(_currentMapID == 15 && !_lightStatus[6])
         {
            n = 6;
         }
         else
         {
            n = -1;
         }
      }
      
      public static function removeSocket() : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_BUY,onGetItem);
      }
      
      public static function onGetItem(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_BUY,onGetItem);
         if(_currentMapID == 60)
         {
            n = 0;
         }
         else if(_currentMapID == 696)
         {
            n = 1;
         }
         else if(_currentMapID == 692)
         {
            n = 2;
         }
         else if(_currentMapID == 694)
         {
            n = 3;
         }
         else if(_currentMapID == 476)
         {
            n = 4;
         }
         else if(_currentMapID == 404)
         {
            n = 5;
         }
         else if(_currentMapID == 15)
         {
            n = 6;
         }
         _currentMapID == 0;
         _flag = true;
      }
      
      public static function dialog() : void
      {
         if(!_flag || n == -1 || TasksManager.getTaskStatus(851) != TasksManager.COMPLETE)
         {
            return;
         }
         _flag = false;
         _isFightNPC = false;
         NpcDialog.show(NPC.SEER,["哇！太棒了!这下点亮" + _property[n] + "元素之星就有希望了！我现在就回去试试！"],["返回诺可撒斯星！"],[function():void
         {
            MapManager.changeMap(699);
         }]);
      }
      
      public static function fightWithLeiyi() : void
      {
         NpcDialog.show(NPC.LEIYI,["这段时间我们一直都会在0xff0000诺可撒斯星0xffffff驻守，以免海盗集团乘虚而入，那可就不好了！"],["雷神，我要挑战你！","哇！雷神好帅啊！"],[function():void
         {
            FightManager.fightWithBoss("雷伊",7);
         }]);
      }
      
      public static function fightWithKaxiusi() : void
      {
         NpcDialog.show(NPC.KAXIUSI_WHITE,["在这个世界上，尽然还会有如此关心自己星球命运的朋友存在，真是太值得尊敬了！"],["与卡修斯切磋！","卡修斯是最棒的！"],[function():void
         {
            FightManager.fightWithBoss("卡修斯",8);
         }]);
      }
      
      public static function fightWithBulaike() : void
      {
         NpcDialog.show(NPC.BULAIKE_NEW,["哼！据说海盗已经和邪灵组织勾结，如果你们敢来骚扰我的朋友们，那就让你们尝尝我布莱克的愤怒吧！"],["挑战布莱克！","哇！布莱克还是那么酷！"],[function():void
         {
            FightManager.fightWithBoss("布莱克",9);
         }]);
      }
      
      public static function fightWithGaiya() : void
      {
         NpcDialog.show(NPC.GAIYA,["我要向世界证明，我才是真正的战神！"],["挑战盖亚！","哇！战神果然霸气啊！"],[function():void
         {
            FightManager.fightWithSpecial("盖亚");
         }]);
      }
      
      public static function loginStatus() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_LIGHT_STATUS,onLogin);
         SocketConnection.send(CommandID.GET_LIGHT_STATUS);
      }
      
      private static function onLogin(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         SocketConnection.removeCmdListener(CommandID.GET_LIGHT_STATUS,onLogin);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedByte();
         _loc5_ = 0;
         while(_loc5_ < 7)
         {
            if((_loc4_ = uint(_loc3_ & 1)) == 1)
            {
               _lightStatus[_loc5_] = true;
            }
            else
            {
               _lightStatus[_loc5_] = false;
            }
            _loc3_ >>= 1;
            _loc5_++;
         }
      }
      
      private static function dandiDialog() : void
      {
         CommonUI.addYellowExcal(_map.depthLevel["dandi"],0,-80,1.2);
         _map.depthLevel["dandi"].visible = true;
         _map.depthLevel["dandi"].buttonMode = true;
         _map.depthLevel["dandi"].addEventListener(MouseEvent.CLICK,onClickDandi1);
      }
      
      private static function onClickDandi1(param1:Event) : void
      {
         NpcDialog.show(NPC.DANDI,["据说在每个元素之星中都会存在守护者，想挑战他们最佳的时机就在0xff0000" + _dateStr + "0xffffff，记得来哦！"],["恩，我知道了！"],[]);
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(Boolean(_map) && Boolean(_map.depthLevel["dandi"]))
         {
            _map.depthLevel["dandi"].removeEventListener(MouseEvent.CLICK,onClickDandi1);
            _map.depthLevel["dandi"].removeEventListener(MouseEvent.CLICK,onClickDandi);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["safeiluo"]))
         {
            _map.conLevel["safeiluo"].removeEventListener(MouseEvent.CLICK,onClickAlter);
         }
         _loc1_ = 0;
         while(_loc1_ < 7)
         {
            if(Boolean(_map) && Boolean(_map.btnLevel["circle" + _loc1_]))
            {
               _map.btnLevel["circle" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickCircle);
               _map.btnLevel["circle" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickCircle1);
            }
            _loc1_++;
         }
         _map = null;
      }
   }
}
