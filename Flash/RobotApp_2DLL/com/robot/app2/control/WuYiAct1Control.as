package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WuYiAct1Control
   {
      
      private static var _map:BaseMapProcess;
      
      private static var n:int = 0;
      
      private static var _mc:MovieClip;
      
      private static var _isPlay2:Boolean;
       
      
      public function WuYiAct1Control()
      {
         super();
      }
      
      public static function initMap10873(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.btnLevel["btn"].visible = false;
         play(1,1,function():void
         {
            story1();
         });
      }
      
      public static function initMap10874(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(_isPlay2)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("wuqipre"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               MapManager.currentMap.btnLevel.addChild(mc);
               if(Boolean(_mc) && Boolean(_mc.parent))
               {
                  _mc.parent.removeChild(_mc);
               }
               _mc = mc;
               _mc.addEventListener(MouseEvent.CLICK,onClickMc);
               mc.addFrameScript(4,function():void
               {
                  mc.addFrameScript(4,null);
                  if(mc["mc3"])
                  {
                     MovieClip(mc["mc3"]).gotoAndStop(MovieClip(mc["mc3"]).totalFrames);
                  }
               });
               mc.gotoAndStop(5);
            });
         }
         else
         {
            play(5,3,function():void
            {
               story2();
            });
         }
      }
      
      protected static function onClickMc(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(event.target.name == "btnBoss")
         {
            NpcDialog.show(NPC.SINEIERDE,["欺负摩托托，就是欺负我…."],["没有精灵是萨格罗斯的对手（进入对战）","…..还是放弃吧。"],[function():void
            {
               fight2();
               _isPlay2 = true;
            }]);
         }
      }
      
      public static function initMap10875(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         play(7,5,function():void
         {
            story3();
         });
      }
      
      public static function initMap10876(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         play(9,6,function():void
         {
            story4();
         });
      }
      
      public static function story1() : void
      {
         NpcDialog.show(NPC.SINEIERDE,["呜呜呜…..摩托托！你醒醒啊！"],["他怎么了？"],[function():void
         {
            NpcDialog.show(NPC.SINEIERDE,["呜呜呜….我也不知道，他突然从空中掉下来了…不会摔死了吧？？我可是好不容易才找到这里。"],["我们必须保持关注！"],[function():void
            {
               NpcDialog.show(NPC.SINEIERDE,["我知道他是谁，现在我必须要把他弄醒，来，帮我一把！用冷水帮我把他浇醒！"],["哦！好的！"],[function():void
               {
                  KTool.getBitSet([17688],function(param1:Array):void
                  {
                     var val:Array = param1;
                     if(val[0] > 0)
                     {
                        NpcDialog.show(NPC.SINEIERDE,["呜呜呜呜…..这倒霉孩子怎么还不醒啊！！水呢？你快点去啊！"],["在这里！（使用那桶水）,好好…."],[function():void
                        {
                           play(4,2,function():void
                           {
                              KTool.doExchange(5484,function():void
                              {
                                 ModuleManager.showAppModule("WuyiAct2015Panel");
                              });
                           });
                        }]);
                     }
                     else
                     {
                        _map.btnLevel["btn"].visible = true;
                        _map.btnLevel["btn"].addEventListener(MouseEvent.CLICK,onClick1);
                        NpcDialog.show(NPC.SINEIERDE,["呜呜呜呜…..这倒霉孩子怎么还不醒啊！！水呢？你快点去啊！"],["在这里！（使用那桶水）,好好…."],[function():void
                        {
                        }]);
                     }
                  });
               }]);
            }]);
         }]);
      }
      
      public static function story2() : void
      {
         if(_isPlay2)
         {
            return;
         }
         NpcDialog.show(NPC.DIEN,["两位妖王，我是迪恩。"],["是你的绿东西刚才欺负摩托托的吗？"],[function():void
         {
            NpcDialog.show(NPC.DIEN,["它叫萨格罗斯….你可不是他的对手。"],["……..我不允许你欺负摩托托。"],[function():void
            {
               NpcDialog.show(NPC.SINEIERDE,["欺负摩托托，就是欺负我…."],["没有精灵是萨格罗斯的对手（进入对战）","…..还是放弃吧。"],[function():void
               {
                  fight2();
                  _isPlay2 = true;
               },function():void
               {
                  MapManager.currentMap.btnLevel.addChild(_mc);
               }]);
            }]);
         }]);
      }
      
      private static function fight2() : void
      {
         var onFight:Function = null;
         var errorFun:Function = null;
         onFight = function(param1:*):void
         {
            var e:* = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            SocketConnection.mainSocket.removeErrorListener(4517,errorFun);
            play(6,4,function():void
            {
               finishTask(2);
            });
         };
         errorFun = function(param1:SocketErrorEvent):void
         {
            SocketConnection.mainSocket.removeErrorListener(4517,errorFun);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
         };
         FightManager.tryFight(224,[17263,20190,17262,17260]);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         SocketConnection.mainSocket.addErrorListener(4517,errorFun);
      }
      
      public static function story3() : void
      {
         NpcDialog.show(NPC.SHENGJIAN,["摩托托？你已经决定要跟他去了吗？"],["我这样做是不是错了？"],[function():void
         {
            NpcDialog.show(NPC.SINEIERDE,["你内心早已没有恶念，这又有什么错？"],["可是他…."],[function():void
            {
               NpcDialog.show(NPC.SINEIERDE,["他肯为你而来，并且保护你，说明内心有善。我相信你们在最后一定会有所选择的。"],["谢谢你，守护了你这么久，真不忍心离开。"],[function():void
               {
                  NpcDialog.show(NPC.MOTUOTUO,["那我今晚就出发了，如果耶里梅斯找我，就告诉他我溜出去玩了。"],["好。"],[function():void
                  {
                     finishTask(3);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function story4() : void
      {
         NpcDialog.show(NPC.MOTUOTUO,["你打扫干净了吗？一共10处垃圾哦！"],["扫干净了！等会！"],[function():void
         {
            var _loc1_:* = 0;
            while(_loc1_ < 10)
            {
               _map.btnLevel["btn_" + _loc1_].addEventListener(MouseEvent.CLICK,onClick);
               _loc1_++;
            }
         }]);
      }
      
      public static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         e.currentTarget.visible = false;
         ++n;
         if(n == 10)
         {
            play(11,7,function():void
            {
               finishTask(4);
            });
         }
         else
         {
            NpcDialog.show(NPC.MOTUOTUO,["还有几处没有打扫干净，细心点啊。"],["好。"],[function():void
            {
            }]);
         }
      }
      
      public static function onClick1(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.sendWithCallback(43597,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.doExchange(5484,function():void
            {
               _map.btnLevel["btn"].visible = false;
               ModuleManager.showAppModule("WuyiAct2015Panel");
            });
         },1,1);
      }
      
      public static function play(param1:int, param2:int, param3:Function = null) : void
      {
         var index:int = param1;
         var i:int = param2;
         var fun:Function = param3;
         KTool.hideMapAllPlayerAndMonster();
         MapNamePanel.hide();
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("wuqipre"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.btnLevel.addChild(mc);
            if(Boolean(_mc) && Boolean(_mc.parent))
            {
               _mc.parent.removeChild(_mc);
            }
            _mc = mc;
            _mc.addEventListener(MouseEvent.CLICK,onClickMc);
            AnimateManager.playMcAnimate(mc,index,"mc" + i,function():void
            {
               DisplayUtil.removeForParent(mc);
               if(fun != null)
               {
                  fun();
               }
               KTool.showMapAllPlayerAndMonster();
               MapNamePanel.show();
               MapObjectControl.hideOrShowAllObjects(true);
               LevelManager.iconLevel.visible = true;
            });
         });
      }
      
      private static function finishTask(param1:int) : void
      {
         var index:int = param1;
         SocketConnection.sendWithCallback(43597,function(param1:SocketEvent):void
         {
            ModuleManager.showAppModule("WuyiAct2015Panel");
         },1,index);
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(_mc)
         {
            if(_mc.parent)
            {
               _mc.parent.removeChild(_mc);
            }
            _mc.removeEventListener(MouseEvent.CLICK,onClickMc);
            _mc = null;
         }
         if(_map)
         {
            _loc1_ = 0;
            while(_loc1_ < 10)
            {
               if(_map.btnLevel["btn_" + _loc1_])
               {
                  _map.btnLevel["btn_" + _loc1_].removeEventListener(MouseEvent.CLICK,onClick);
               }
               _loc1_++;
            }
            if(_map.btnLevel["btn"])
            {
               _map.btnLevel["btn"].removeEventListener(MouseEvent.CLICK,onClick);
            }
         }
         _map = null;
      }
   }
}
