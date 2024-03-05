package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
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
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ShiHuaSummerActivity
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:Boolean;
      
      private static var _taskState2:Boolean;
      
      private static var _taskMC:MovieClip;
      
      private static var _step:uint;
      
      private static var _canFightWidthBoss:Boolean;
      
      private static var _timer:uint;
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","16-17","8-14","4","*","2016")]);
      
      public static const TIME_STR:String = "4月8日-4月14日   每天16:00-18:00";
       
      
      public function ShiHuaSummerActivity()
      {
         super();
      }
      
      public static function initForMap40(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskMC = _map.conLevel["sh_summer"];
         _taskMC.buttonMode = true;
         MapListenerManager.add(_taskMC,onNpcClick);
         MapListenerManager.add(_map.conLevel["hitmc"],onNpcClick);
         _taskState = BitBuffSetClass.getState(22435);
         _taskState2 = BitBuffSetClass.getState(22436);
      }
      
      public static function initForMap750(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskMC = _map.conLevel["shxk"];
         _taskMC.buttonMode = true;
         MapListenerManager.add(_taskMC,onNpc2Click);
         _taskState2 = BitBuffSetClass.getState(22436);
         MapListenerManager.add(_map.btnLevel["introBtn"],onShowIntro);
         onNpc2Click();
      }
      
      private static function playAnim() : void
      {
         clearTimeout(_timer);
         AnimateManager.playMcAnimate(_taskMC,4,"mc",function():void
         {
            _taskMC.mouseChildren = true;
            _taskMC.mouseEnabled = true;
            _timer = setTimeout(hideAnim,10000);
         });
      }
      
      private static function hideAnim() : void
      {
         AnimateManager.playMcAnimate(_taskMC,5,"mc",function():void
         {
            _taskMC.mouseChildren = false;
            _taskMC.mouseEnabled = false;
            _timer = setTimeout(playAnim,20000);
         });
      }
      
      private static function onGetTime(param1:SocketEvent = null) : void
      {
         var _loc2_:uint = uint(MapManager.currentMap.id);
         if(isInActive)
         {
            if(_loc2_ == 750)
            {
               _taskMC.visible = true;
            }
         }
         else if(_loc2_ == 750)
         {
            _taskMC.visible = false;
         }
      }
      
      private static function get isInActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      private static function onClose(param1:Event) : void
      {
         var e:Event = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         EventManager.removeEventListener("close",onClose);
         AnimateManager.playMcAnimate(_taskMC,4,"mc",function():void
         {
            NpcDialog.show(NPC.XIAOKU,["看，水面上悬浮的会不会就是净化水滴呢？"],["一定是的，太好了。"],[function():void
            {
               BitBuffSetClass.setState(22436,1,function():void
               {
                  _taskState2 = true;
                  clearTimeout(_timer);
                  _timer = setTimeout(hideAnim,10000);
               });
            }]);
         });
      }
      
      private static function onAimat(param1:AimatEvent) : void
      {
         var info:AimatInfo;
         var evt:AimatEvent = param1;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimat);
         info = evt.info;
         if(info.userID != MainManager.actorID)
         {
            return;
         }
         if(_map.conLevel["hitmc"].hitTestPoint(info.endPos.x,info.endPos.y))
         {
            AnimateManager.playMcAnimate(_taskMC,2,"mc",function():void
            {
               CommonUI.addYellowArrow(_map.topLevel,438,213,45);
               _step = 2;
            });
         }
         else
         {
            AimatController.addEventListener(AimatEvent.PLAY_END,onAimat);
         }
      }
      
      private static function onNpc2Click(param1:MouseEvent = null) : void
      {
         var flg:uint = 0;
         var e:MouseEvent = param1;
         if(isInActive)
         {
            if(_taskState2)
            {
               SocketConnection.addCmdListener(CommandID.GET_FIGHT_ENABLE,function(param1:SocketEvent):void
               {
                  var data:ByteArray;
                  var num:uint;
                  var ee:SocketEvent = param1;
                  clearTimeout(flg);
                  _taskMC.mouseEnabled = true;
                  _taskMC.mouseChildren = true;
                  SocketConnection.removeCmdListener(CommandID.GET_FIGHT_ENABLE,arguments.callee);
                  data = ee.data as ByteArray;
                  num = data.readUnsignedInt();
                  if(num == 1)
                  {
                     if(!e)
                     {
                        _taskMC.gotoAndStop(1);
                     }
                     else if(_taskMC.currentFrame != 1)
                     {
                        AnimateManager.playMcAnimate(_taskMC,6,"mc",function():void
                        {
                           _taskMC.gotoAndStop(1);
                        });
                     }
                     else
                     {
                        FightManager.fightWithBoss("小库");
                     }
                  }
                  else if(!e)
                  {
                     _taskMC.mouseChildren = true;
                     _taskMC.mouseEnabled = true;
                     AnimateManager.playMcAnimate(_taskMC,4,"mc",function():void
                     {
                        clearTimeout(_timer);
                        _timer = setTimeout(hideAnim,10000);
                     });
                  }
                  else if(_taskMC.currentFrame == 1)
                  {
                     AnimateManager.playMcAnimate(_taskMC,4,"mc",function():void
                     {
                        clearTimeout(_timer);
                        _timer = setTimeout(hideAnim,10000);
                     });
                  }
                  else
                  {
                     AnimateManager.playMcAnimate(_taskMC,5,"mc",function():void
                     {
                        clearTimeout(_timer);
                        SocketConnection.send(CommandID.GET_REFINE_WATER);
                        _taskMC.mouseChildren = false;
                        _taskMC.mouseEnabled = false;
                        _timer = setTimeout(playAnim,20000);
                     });
                  }
               });
               _taskMC.mouseEnabled = false;
               _taskMC.mouseChildren = false;
               flg = setTimeout(function():void
               {
                  clearTimeout(flg);
                  _taskMC.mouseEnabled = true;
                  _taskMC.mouseChildren = true;
               },2000);
               clearTimeout(_timer);
               SocketConnection.send(CommandID.GET_FIGHT_ENABLE);
               return;
            }
            if(_step == 3)
            {
               MainManager.selfVisible = false;
               NpcDialog.show(NPC.XIAOKU,["恶魔星的水都被邪恶力量污染了，我还是会变成石头的，呜呜"],["别着急，一定有办法的 "],[function():void
               {
                  AnimateManager.playMcAnimate(_taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.YOUNIKA,["哈哈，还有这个丑家伙。赛尔，你这么喜欢拯救世界吗？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["哈哈，恶魔星的水拥有我魔圣的强大能量，这些低等精灵怎么消受得起，你只能眼睁睁看着它石化了。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.YOUNIKA,["看来幽暗迷宫要多一个石像了，我会记得来欣赏的。"],["我…我一定能想到办法的。"],[function():void
                           {
                              AnimateManager.playMcAnimate(_taskMC,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.XIAOKU,["没有恶魔星的水，我会重新变成石头的。赛尔，快帮我收集净化水滴吧。"],["（我找找这里有什么线索） "],[function():void
                                 {
                                    EventManager.addEventListener("close",onClose);
                                    MainManager.selfVisible = true;
                                    CommonUI.addYellowArrow(_map.topLevel,333,224,45);
                                 }]);
                              });
                           }]);
                        });
                     });
                  });
               }]);
            }
         }
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(isInActive)
         {
            if(_taskState2)
            {
               NpcDialog.show(NPC.XIAOKU,["你们能送我回家吗？没有恶魔星的水，我还是会变成石头的。"],[" 当然可以，那我们出发吧  "],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120727_1"),function():void
                  {
                     MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                     {
                        MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                        _step = 3;
                     });
                     MapManager.changeMap(750);
                  });
               }]);
               return;
            }
            if(_step == 2)
            {
               CommonUI.removeYellowArrow(_map.topLevel);
               AnimateManager.playMcAnimate(_taskMC,3,"mc",function():void
               {
                  NpcDialog.show(NPC.KAKA,["石头会说话！！喝水？它要喝水？"],["可是，上哪里找水呢？这里只有冰块……"],[function():void
                  {
                     AnimateManager.playMcAnimate(_taskMC,4,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["你真的……好有诚意……"],["（……一个小时过去了……）"],[function():void
                        {
                           AnimateManager.playMcAnimate(_taskMC,5,"mc",function():void
                           {
                              NpcDialog.show(NPC.XIAOKU,["我叫小库，是来自恶魔星的精灵。恶魔星的水被邪恶力量污染了，我只能来到别的星球找水。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.XIAOKU,["可是这里全是冰块，我好渴好渴，就变成石头了。谢谢你们救了我。"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.XIAOKU,["你们能送我回家吗？没有恶魔星的水，我还是会变成石头的。"],[" 当然可以，那我们出发吧  "],[function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120727_1"),function():void
                                       {
                                          MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                                          {
                                             MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                                             _step = 3;
                                          });
                                          MapManager.changeMap(750);
                                       });
                                    }]);
                                 });
                              });
                           });
                        }]);
                     });
                  }]);
               });
            }
            else
            {
               if(_step == 1)
               {
                  CommonUI.removeYellowArrow(_map.topLevel);
                  NpcDialog.show(NPC.KAKA,["你是想徒手破开冰层吗？试试用头部射击击碎它吧。"],["其实我也是这么想的……"],[function():void
                  {
                     AimatController.addEventListener(AimatEvent.PLAY_END,onAimat);
                  }]);
                  return;
               }
               NpcDialog.show(NPC.KAKA,["赛尔，帮我去看看那个黑影到底是什么吧，它出现好多天了，太困扰我了。"],["好的，我这就去"],[function():void
               {
                  _step = 1;
                  CommonUI.addYellowArrow(_map.topLevel,522,107,45);
               }]);
            }
         }
         else if(_taskState)
         {
            NpcDialog.show(NPC.KAKA,[TIME_STR + "，冰层会变得比较薄，到时再来破开冰层吧。"],["好的，我一定准时过来。"]);
         }
         else
         {
            NpcDialog.show(NPC.KAKA,["赛尔，帮我去看看那个黑影到底是什么吧，它出现好多天了，太困扰我了。"],["好的，我这就去"],[function():void
            {
               CommonUI.addYellowArrow(_map.topLevel,522,107,45);
               BitBuffSetClass.setState(22435,1,function():void
               {
                  _taskState = true;
                  SocketConnection.send(1022,84807424);
               });
            }]);
         }
      }
      
      private static function onShowIntro(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ShiHuaSummerPanel"),"正在加载...");
         SocketConnection.send(1022,84807426);
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         var _loc1_:uint = uint(MapManager.currentMap.id);
         _step = 0;
         clearTimeout(_timer);
         DisplayUtil.removeForParent(_taskMC);
         CommonUI.removeYellowArrow(_map.topLevel);
         EventManager.removeEventListener("close",onClose);
         _map = null;
         _taskMC = null;
      }
   }
}
