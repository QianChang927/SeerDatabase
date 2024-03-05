package com.robot.app2.control
{
   import com.robot.app.ogre.OgreController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MotherDayFireAndIceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
      
      private static var zhuangzhi:SimpleButton;
       
      
      public function MotherDayFireAndIceController()
      {
         super();
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(1478);
      }
      
      private static function initGame() : void
      {
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndFun);
      }
      
      private static function onAimatEndFun(param1:AimatEvent) : void
      {
         var _loc5_:OgreModel = null;
         var _loc2_:Point = param1.info.endPos;
         var _loc3_:Array = OgreController.getOgreList();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            if((_loc5_ = _loc3_[_loc4_] as OgreModel).hitTestPoint(_loc2_.x,_loc2_.y))
            {
               SocketConnection.send(CommandID.FIREANDICE_GETICEITEM);
               return;
            }
            _loc4_++;
         }
      }
      
      public static function initMap83(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskMC = _map.conLevel["fireMc"];
         if(taskState != TasksManager.COMPLETE && SystemTimerManager.sysBJDate.time >= new Date(2014,1,7).time)
         {
            TasksManager.accept(1478);
            taskMC.buttonMode = true;
            taskMC.addEventListener(MouseEvent.CLICK,startStep);
         }
         else
         {
            destroy();
         }
      }
      
      public static function initMap86(param1:BaseMapProcess) : void
      {
         var da:Date = null;
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC = _map.conLevel["fireMc"];
         zhuangzhi = _map.conLevel["fireIceBtn"];
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
            {
               TasksManager.complete(1478,0,function():void
               {
                  OgreController.isShow = true;
                  MainManager.selfVisible = true;
                  DisplayUtil.removeForParent(taskMC);
               });
            });
         }
         else
         {
            DisplayUtil.removeForParent(taskMC);
         }
         kuang();
         da = SystemTimerManager.sysBJDate;
         MapListenerManager.add(zhuangzhi,function():void
         {
            if(da.time >= new Date(2014,1,7).time)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("adown/MotherDayFireAndIceMainPanel"));
            }
            else
            {
               Alarm.show("活动时间未到，记得明天再来哦！");
            }
         },"贝克特极寒进化论");
         initGame();
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("adown/MotherDayFireAndIceMainPanel"));
      }
      
      private static function kuang() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 1;
         while(_loc1_ < 4)
         {
            _loc2_ = _map.conLevel["kuang" + _loc1_] as MovieClip;
            _loc2_.buttonMode = true;
            _loc2_.addEventListener(MouseEvent.CLICK,onKuang);
            _loc2_.gotoAndStop(1);
            _loc1_++;
         }
      }
      
      private static function onKuang(param1:MouseEvent) : void
      {
         var index:uint;
         var mc:MovieClip = null;
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86057516);
         mc = event.currentTarget as MovieClip;
         index = uint(mc.name.slice(-1));
         SocketConnection.addCmdListener(CommandID.FIREANDICE_GETSTORE,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var index:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.FIREANDICE_GETSTORE,arguments.callee);
            by = e.data as ByteArray;
            index = by.readUnsignedInt();
            if(index)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("adown/MotherDayFireAndIceKuangPanel"),"正在打开",index);
            }
            else
            {
               AnimateManager.playMcAnimate(mc,2,"mc",function():void
               {
                  mc.gotoAndStop(1);
                  Alarm.show("恭喜你获得一颗永冻石");
               });
            }
         });
         SocketConnection.send(CommandID.FIREANDICE_GETSTORE,index);
      }
      
      private static function startStep(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         OgreController.isShow = false;
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
         {
            NpcDialog.show(NPC.XIAOBEI,["我只是…我只是想见一见大地之母，因为只有它才能救我…呜呜呜，小贝不想死，小贝还没有见过自己的妈妈…"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.XIAOBEI,["你...你找大地之母，是想让它帮你找到自己的妈妈？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.XIAOBEI,["它能帮我找到妈妈？！！！我只是听说，大地之母拥有神奇无比的力量，能够让我不再继续融化，这样我就…"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                        {
                           NpcDialog.show(NPC.XIAOBEI,["我…我叫小贝，我是一只会慢慢融化的冰系精灵…我找到了很多古老的精灵，找到了通往这里的钥匙…"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active2013050900256"),function():void
                                 {
                                    NpcDialog.show(NPC.LAOLUNSI,["小贝…弟弟…你是我的弟弟！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
                                       {
                                          NpcDialog.show(NPC.XIAOBEI,["妈妈？妈妈就在这里？我们…我们为什么不能在一起？你真的是我的哥哥吗？"],null,null,false,function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                                             {
                                                NpcDialog.show(NPC.LAOLUNSI,["都是因为你！当年如果不是为了保护你，妈妈也不会想把我带到这个地方来。妈妈一踏进这块土地，就被莫名其妙地封印了起来…都是你的错！"],null,null,false,function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,7,"mc7",function():void
                                                   {
                                                      NpcDialog.show(NPC.LAOLUNSI,["好！既然如此，小家伙，你听着，从现在开始，你需要快速成长起来，我还指望你救出妈妈呢！"],null,null,false,function():void
                                                      {
                                                         NpcDialog.show(NPC.XIAOBEI,["哥哥…嗯！我们一起救出妈妈！"],null,null,false,function():void
                                                         {
                                                            MapManager.changeMap(86);
                                                            OgreController.isShow = true;
                                                            MainManager.selfVisible = true;
                                                         });
                                                      });
                                                   });
                                                });
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(MapManager.currentMap.id == 86)
         {
            _loc1_ = 1;
            while(_loc1_ < 4)
            {
               (_map.conLevel["kuang" + _loc1_] as MovieClip).removeEventListener(MouseEvent.CLICK,onKuang);
               _loc1_++;
            }
            taskMC.removeEventListener(MouseEvent.CLICK,startStep);
            _map = null;
         }
         else if(MapManager.currentMap.id == 83)
         {
            if(taskMC != null)
            {
               DisplayUtil.removeForParent(taskMC);
            }
         }
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndFun);
      }
   }
}
