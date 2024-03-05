package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.utils.BitUtils;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class LoongBadgesResonanceController
   {
      
      private static var mcMovie:MovieClip;
      
      private static var index:int = 0;
       
      
      public function LoongBadgesResonanceController()
      {
         super();
      }
      
      public static function initMap1158() : void
      {
         KTool.getMultiValue([8538],function(param1:Array):void
         {
            var values:Array = param1;
            if(BitUtils.getBit(values[0],6) == 1 && BitUtils.getBit(values[0],7) == 0)
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("loong_badges_resonance_2"),function(param1:MovieClip):void
               {
                  if(Boolean(mcMovie) && Boolean(mcMovie.parent))
                  {
                     mcMovie.parent.removeChild(mcMovie);
                  }
                  mcMovie = param1;
                  mcMovie.name = "step_2";
                  mcMovie.gotoAndStop(1);
                  mcMovie.addEventListener(MouseEvent.CLICK,onClickNPC);
                  MapManager.currentMap.btnLevel.addChild(mcMovie);
               });
            }
         });
      }
      
      public static function initMap11053() : void
      {
         KTool.getMultiValue([8538],function(param1:Array):void
         {
            var i:int = 0;
            var count:int = 0;
            var bit:int = 0;
            var values:Array = param1;
            var completed:int = int(BitUtils.getBit(values[0],8));
            var index:int = 0;
            if(BitUtils.getBit(values[0],0) > 0)
            {
               index = 1;
            }
            i = 0;
            count = 0;
            i = 0;
            while(i < 5)
            {
               bit = int(BitUtils.getBit(values[0],1 + i));
               count += bit;
               i++;
            }
            if(BitUtils.getBit(values[0],6) > 0)
            {
               index = 2;
            }
            if(BitUtils.getBit(values[0],7) > 0)
            {
               index = 3;
            }
            if(index == 0)
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("loong_badges_resonance_0"),function(param1:MovieClip):void
               {
                  mcMovie = param1;
                  mcMovie.name = "step_0";
                  mcMovie.gotoAndStop(1);
                  mcMovie.addEventListener(MouseEvent.CLICK,onClickNPC);
                  MapManager.currentMap.btnLevel.addChild(mcMovie);
               });
            }
            else if(index == 1)
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("loong_badges_resonance_1"),function(param1:MovieClip):void
               {
                  var _loc2_:int = 0;
                  var _loc3_:DisplayObject = null;
                  mcMovie = param1;
                  mcMovie.name = "step_1";
                  if(!BitBuffSetClass.getState(23043))
                  {
                     mcMovie.gotoAndStop(1);
                  }
                  else if(count == 5)
                  {
                     mcMovie.gotoAndStop(4);
                  }
                  else
                  {
                     mcMovie.gotoAndStop(3);
                     i = 0;
                     while(i < 5)
                     {
                        _loc2_ = int(BitUtils.getBit(values[0],1 + i));
                        if(_loc2_ > 0)
                        {
                           _loc3_ = mcMovie["btnBoss_" + i];
                           if(_loc3_)
                           {
                              _loc3_.visible = false;
                           }
                        }
                        ++i;
                     }
                  }
                  mcMovie.addEventListener(MouseEvent.CLICK,onClickNPC);
                  LevelManager.appLevel.addChild(mcMovie);
               });
            }
         });
      }
      
      protected static function onClickNPC(param1:MouseEvent) : void
      {
         var name:String = null;
         var index:int = 0;
         var event:MouseEvent = param1;
         name = String(event.target.name);
         switch(name)
         {
            case "btnStep_0":
               step0();
               break;
            case "btnStep_1":
               step1_0();
               break;
            case "btnBoss_0":
            case "btnBoss_1":
            case "btnBoss_2":
            case "btnBoss_3":
            case "btnBoss_4":
               index = int(name.split("_")[1]);
               fight(index);
               break;
            case "btnNPC_0":
               NpcDialogNew_1.show(NPC.QIAOTELUDE,["怎么样？感觉很吃力吗？"],["并没有。."],null,false,function():void
               {
               });
               break;
            case "btnNPC_1":
               step1_1();
               break;
            case "btnNPC_2":
               NpcDialogNew_1.show(NPC.QIAOTELUDE,["收集的如何了？我的朋友。"],["我想看看还缺哪些道具。."],[function():void
               {
                  ModuleManager.showAppModule("LoongBadgesResonanceItemPanel");
               }]);
         }
      }
      
      private static function fight(param1:int) : void
      {
         var onFight:Function = null;
         var index:int = param1;
         onFight = function(param1:*):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
         };
         var bid:int = 6371 + index;
         var names:Array = ["邪恶魔神","毁灭魔神","寂灭魔神","炼狱魔神","万魔天尊"];
         var bname:String = "";
         FightManager.fightNoMapBoss(bname,bid);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         StatManager.sendStat2014("0115龙纹徽章的共鸣","点击挑战" + names[index],"2016运营活动");
      }
      
      private static function step0() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(NPC.QIAOTELUDE,["陌生人，非常欢迎你来到这里，我已经很久很久没有回到这里了，不过你现在所处的时期，应该是很早以前了。"],["这里发生过什么？"],[function():void
         {
            NpcDialogNew_1.show(NPC.SEER,["这里一点颜色都没有，看起来异常的灰暗。"],["没错。"],[function():void
            {
               NpcDialogNew_1.show(NPC.QIAOTELUDE,["这里曾经发生过巨大的战争，关于龙族。那时候的火焰！熊熊燃烧了整个宇宙！那是龙族的愤怒之火！"],["你们的敌人时谁？"],[function():void
               {
                  NpcDialogNew_1.show(NPC.QIAOTELUDE,["我们的敌人…..我们的敌人很多，非常非常多，我们苦战三天，终于击退了他们！现在！他们来了！！"],["啊？！"],[function():void
                  {
                     AnimateManager.playMcAnimate(mcMovie,2,"mc",function(param1:* = null):void
                     {
                        var e:* = param1;
                        NpcDialogNew_1.show(NPC.QIAOTELUDE,["当时我也不知道怎么回事，突然就有了很强大的力量！"],["他们后来有再袭击你吗？"],[function():void
                        {
                           NpcDialogNew_1.show(NPC.QIAOTELUDE,["他们后来似乎查出了我身上那耀眼光芒的来源，就再没有出现过。"],["好神奇的力量…."],[function():void
                           {
                              NpcDialogNew_1.show(NPC.SEER,["是每一个龙族精灵都会有吗？"],["并不，大概是我运气非常好吧。."],[function():void
                              {
                                 NpcDialogNew_1.show(NPC.QIAOTELUDE,["我感谢龙族的祖先对我的眷顾，听说现在的龙族王子一直以守护正义为最高的荣耀，我很开心，同时我在他的身上，也看到了不一样的地方。"],["对！他非常厉害！."],[function():void
                                 {
                                    KTool.doExchange(8020,function():void
                                    {
                                       MapManager.changeMapWithCallback(1158,function():void
                                       {
                                          KTool.showMapAllPlayerAndMonster();
                                          NpcController.npcVisible = true;
                                          MapObjectControl.hideOrShowAllObjects(true);
                                          ModuleManager.showAppModule("LoongBadgesResonanceMainPanel");
                                       });
                                    });
                                 }]);
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function step1_0() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(NPC.QIAOTELUDE,["陌生人，我们又见面了。其实我的名字对于整个龙族来说，非常陌生。"],["他们都不知道你吗？"],[function():void
         {
            NpcDialogNew_1.show(NPC.SEER,["我是说，你做了那么多，他们都不记得你？"],["哈哈哈。"],[function():void
            {
               NpcDialogNew_1.show(NPC.QIAOTELUDE,["龙族也是有寿命的，并不是永生。也许老龙王摩多听说过一些关于我的故事，但那多少都有点不真实吧。"],["那你还为龙族做了什么？"],[function():void
               {
                  NpcDialogNew_1.show(NPC.QIAOTELUDE,["龙族的很多强大力量，则是由我所率先开启的！下面，你就来感受一下吧~"],["好！"],[function():void
                  {
                     AnimateManager.playMcAnimate(mcMovie,2,"mc",function(param1:* = null):void
                     {
                        var e:* = param1;
                        BitBuffSetClass.setState(23043,1,function():void
                        {
                           KTool.showMapAllPlayerAndMonster();
                           NpcController.npcVisible = true;
                           MapObjectControl.hideOrShowAllObjects(true);
                           mcMovie.gotoAndStop(3);
                        });
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function step1_1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(NPC.QIAOTELUDE,["怎么样？这些魔神们只是我曾经修行的时候偶尔到了魔界，我偷偷摄取了他们的影子，所以才能制造出这些幻象。"],["你知道哈莫雷特吗？"],[function():void
         {
            NpcDialogNew_1.show(NPC.QIAOTELUDE,["我当然知道！那可是龙族历经了多少代，才出了如此杰出的龙王子！而且！他也是唯一一个能与龙纹徽章产生共鸣的精灵！"],["你的意思是？！"],[function():void
            {
               NpcDialogNew_1.show(NPC.QIAOTELUDE,["不，我现在还不敢确定，我刚把他从神殿里救出，现在他还在沉睡。当然，我希望他是……那个可以传承我力量的王子！"],["你打算下一步做什么？"],[function():void
               {
                  AnimateManager.playMcAnimate(mcMovie,5,"mc",function(param1:* = null):void
                  {
                     var e:* = param1;
                     BitBuffSetClass.setState(23044,1,function():void
                     {
                        KTool.showMapAllPlayerAndMonster();
                        NpcController.npcVisible = true;
                        MapObjectControl.hideOrShowAllObjects(true);
                        KTool.doExchange(8034,function():void
                        {
                           ModuleManager.showAppModule("LoongBadgesResonanceMainPanel");
                           if(MapManager.currentMap.id == 1159)
                           {
                              initMap1158();
                           }
                        });
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      public static function step2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         AnimateManager.playMcAnimate(mcMovie,2,"mc",function(param1:* = null):void
         {
            var e:* = param1;
            KTool.doExchange(8021,function():void
            {
               destroy();
               ModuleManager.showAppModule("LoongBadgesResonanceMainPanel");
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               MapObjectControl.hideOrShowAllObjects(true);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(mcMovie)
         {
            if(mcMovie.parent)
            {
               mcMovie.parent.removeChild(mcMovie);
            }
            mcMovie.removeEventListener(MouseEvent.CLICK,onClickNPC);
         }
         mcMovie = null;
      }
   }
}
