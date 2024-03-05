package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.DiamondDailyTaskController;
   import com.robot.app2.control.DragonEvoController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class XuanWuEvoController
   {
      
      private static var mcNpc:MovieClip;
      
      private static var mcAnim:MovieClip;
      
      private static var map:BaseMapProcess;
       
      
      public function XuanWuEvoController()
      {
         super();
      }
      
      public static function initMap1093(param1:BaseMapProcess) : void
      {
         map = param1;
         initNpc();
         var _loc2_:MovieClip = MovieClip(map.btnLevel["mcEnter"]);
         if(_loc2_)
         {
            _loc2_.buttonMode = true;
            _loc2_.addEventListener(MouseEvent.CLICK,onClickDoor);
         }
         SystemTimerManager.addTickFun(initDoor);
      }
      
      private static function initDoor() : void
      {
         var _loc1_:MovieClip = MovieClip(map.btnLevel["mcEnter"]);
         if(_loc1_)
         {
            if(isDoing())
            {
               _loc1_.play();
            }
            else
            {
               _loc1_.gotoAndStop(1);
            }
         }
      }
      
      private static function isDoing() : Boolean
      {
         var _loc8_:CronTimeVo = null;
         var _loc1_:CronTimeVo = new CronTimeVo("30-59","12","*","*","*","*");
         var _loc2_:CronTimeVo = new CronTimeVo("30-59","18","*","*","*","*");
         var _loc3_:CronTimeVo = new CronTimeVo("0-30","20","*","*","*","*");
         var _loc4_:CronTimeVo = new CronTimeVo("0-30","21","*","*","*","*");
         var _loc5_:CronTimeVo = new CronTimeVo("0-30","22","*","*","*","*");
         var _loc6_:Array = [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_];
         var _loc7_:int = 0;
         while(_loc7_ < 5)
         {
            if((_loc8_ = _loc6_[_loc7_]).checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
            _loc7_++;
         }
         return false;
      }
      
      protected static function onClickDoor(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(isDoing())
         {
            ItemManager.updateItems([1200424],function():void
            {
               var num:int = int(ItemManager.getNumByID(1200424));
               if(num > 0)
               {
                  SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
                  {
                     XuanWuEvoFightController.currLayer = 0;
                     MapManager.changeMap(10913);
                  },6,0);
               }
               else
               {
                  Alarm2.show("你还没有玄武挑战令，请通过探险家的考验再进入厚土之境！");
               }
            });
         }
         else
         {
            Alarm2.show("厚土之境还未开启！请稍后再来！");
         }
         DiamondDailyTaskController.tryFinish(8,46);
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(initDoor);
         CommonUI.removeYellowExcal(map.btnLevel);
         if(mcNpc)
         {
            mcNpc.removeEventListener(MouseEvent.CLICK,onClickNpc);
         }
         mcAnim = null;
         map = null;
      }
      
      private static function initNpc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("npcLong"),function(param1:MovieClip):void
         {
            mcNpc = param1;
            mcNpc.buttonMode = true;
            mcNpc.mouseChildren = false;
            mcNpc.x = 500;
            mcNpc.y = 380;
            mcNpc.addEventListener(MouseEvent.CLICK,onClickNpc);
            MapManager.currentMap.depthLevel.addChild(mcNpc);
            CommonUI.addYellowExcal(map.btnLevel,500,320);
         });
      }
      
      protected static function onClickNpc(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         StatManager.sendStat2014("0703玄武超进化","点击1093场景NPC",StatManager.RUN_ACT_2015);
         DiamondDailyTaskController.tryFinish(8,46);
         if(!BitBuffSetClass.getState(22797))
         {
            loadAnimate();
         }
         else
         {
            NpcDialog.show(NPC.TWOBLONG2,["小赛尔，有什么事情找我吗？"],["我是来寻找北冥•玄武大人的！","我是来寻找其他神兽大人的！","我没什么事，路过而已！"],[function():void
            {
               findXuanWu();
            },function():void
            {
               OtherGodMonster();
            }]);
         }
      }
      
      private static function findXuanWu() : void
      {
         NpcDialog.show(NPC.TWOBLONG,["北冥•玄武大人就在厚土之境的尽头，厚土之境每日开启5次，请在规定时间内通过地宫即可挑战北冥•玄武了！"],["请告诉我厚土之境的开启时间吧！","我受到北冥•玄武的认可了，请帮我超进化,谢谢!"],[function():void
         {
            getFightToken();
         },function():void
         {
            ModuleManager.showAppModule("XuanWuEvoPanel");
         }]);
      }
      
      private static function getFightToken() : void
      {
         NpcDialog.show(NPC.TWOBLONG,["厚土之境每天的开放时间为：12:30-13:00，18:30-19:00，20:00-20:30，21:00-21:30，22：00-22:30，你需要拥有玄武挑战令才可进入厚土之境！"],["我要获得玄武挑战令！","我一定来！"],[function():void
         {
            KTool.getBitSet([1000061],function(param1:Array):void
            {
               var values:Array = param1;
               if(values[0] > 0)
               {
                  NpcDialog.show(NPC.TWOBLONG,["你今天已经通过了我的考验了，请明天再来！"],["我一定来！"],[function():void
                  {
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.TWOBLONG,["哦？想获得玄武挑战令？那我得试试你有没有这个功夫了！你如果能够战胜我，那我就送你玄武挑战令！"],["那就来吧！我是很厉害的！","我还是太弱了！"],[function():void
                  {
                     FightManager.fightNoMapBoss("",4174);
                  }]);
               }
            });
         }]);
      }
      
      private static function OtherGodMonster() : void
      {
         DragonEvoController.onLong(null);
      }
      
      private static function loadAnimate() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("xuanwu_evo"),function(param1:MovieClip):void
         {
            mcAnim = param1;
            playAnimate();
         });
      }
      
      private static function playAnimate() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ToolBarController.panel.hide();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         MapManager.currentMap.controlLevel.addChild(mcAnim);
         MapObjectControl.hideOrShowAllObjects(false);
         mcNpc.visible = false;
         AnimateManager.playMcAnimate(mcAnim,1,"mc",function():void
         {
            npcDialogStep1();
         });
      }
      
      private static function npcDialogStep1() : void
      {
         NpcDialog.show(NPC.QING_LONG_CHAO_JIN_HUA,["两位好，我是苍魂青龙的一缕分身，伴随着宇宙探险家龙在各地冒险。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.MO_JIA_BA_XIA,["尊敬的青龙大人，各位神兽大人，我们当然能感受到您们的气息。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JING_JIA_BAO_YAN,["向您们致以最诚挚的问候。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.TIGEREVO,["两位守护，他们并不是故意冒犯。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.CHIHUNAGZHUQUE,["他们一直在追寻力量的奥秘。这里有着神兽蜕变的气息，他们只是一时好奇，想要琢磨出引导自己蜕变的蛛丝马迹。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.JING_JIA_BAO_YAN,["这……我们可以理解。但是，我家主人已经到了蜕变的最后关头，我们奉命守护此地，绝不能让任何事情影响到他！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SHENG_GUANG_LING_WANG,["两位多虑了，他已经迈出了那一步。"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(mcAnim,2,"mc",function():void
                              {
                                 npcDialogStep2();
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function npcDialogStep2() : void
      {
         NpcDialog.show(NPC.JING_JIA_BAO_YAN,["精灵王大人！灵王大人！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.MO_JIA_BA_XIA,["诸位大人们驾临此地，是我们的荣幸。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JING_JIA_BAO_YAN,["大人，您刚才说，主人已经迈出了那一步？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.GUANG_JING_LING_WANG,["是的，神兽独有的气息，我们绝对不会感觉错。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SHENG_GUANG_LING_WANG,["伟大的巴斯特，他已进入了全新的境界。宇宙之间，神兽之力前所未有的强大！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.JING_JIA_BAO_YAN,["这……太好了！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(mcAnim,3,"mc",function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("xuanwu_full_anim"),function():void
                              {
                                 npcDialogStep3();
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function npcDialogStep3() : void
      {
         NpcDialog.show(NPC.BEI_MING_XUAN_WU,["哈哈，诸位，久等了。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.BEI_MING_XUAN_WU,["想不到我的一次蜕变居然惹得如此多的重磅人物密切关注啊。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.FIRE_MONSTER_KING,["你身居神兽之位，你的安危关系到整个宇宙的安宁，我们当然不能掉以轻心。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SHENG_GUANG_LING_WANG,["好在你终于踏出了那一步，这真是宇宙的幸事。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BEI_MING_XUAN_WU,["我看到这里还有两个小家伙。恩？探险家龙，好久不见啊！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.TWOBLONG2,["好久不见，巴斯特大人。看来我又有新的挑战了。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.BEI_MING_XUAN_WU,["哈哈，那是当然。但是你肩负着重要的使命，这显然比挑战我更重要得多。"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.BEI_MING_XUAN_WU,["我刚刚蜕变，力量还不够稳固。迎接挑战，才能让我更加强大！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(mcAnim,4,"mc",function():void
                                 {
                                    BitBuffSetClass.setState(22797,1);
                                    mcAnim.parent.removeChild(mcAnim);
                                    KTool.showMapAllPlayerAndMonster();
                                    ToolBarController.panel.show();
                                    ToolBarController.showOrHideAllUser(true);
                                    LevelManager.iconLevel.visible = true;
                                    MapObjectControl.hideOrShowAllObjects(true);
                                    mcNpc.visible = true;
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
   }
}
