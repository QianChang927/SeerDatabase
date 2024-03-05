package com.robot.app2.control
{
   import com.robot.app.control.SpriteCountermarkController;
   import com.robot.app.panel.PetChoosePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class PvpUpGradeController
   {
      
      private static const UPGRADELEARNINGABILITY:uint = 1;
      
      private static const UPGRADECHARACTER:uint = 3;
      
      private static const UPGRADEENTITY:uint = 2;
      
      private static var _num:uint;
      
      private static var _info:PetInfo;
      
      private static var _catchTime:uint;
      
      private static var _uis:Array = ["LearningAbilityUpgradePanel","EntityUpgradePanel","CharacterUpgradePanel"];
      
      private static var _type:uint;
      
      public static var flag:Boolean = false;
      
      private static var selectInfo;
       
      
      public function PvpUpGradeController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            SocketConnection.addCmdListener(CommandID.MAX_LVL_MONSTER_NOTIFY,onGetNotice);
            SocketConnection.addCmdListener(CommandID.GET_MAX_LEVEL_MONSTER_ADVANCE_INFO,onGetInfo);
            SocketConnection.send(CommandID.GET_MAX_LEVEL_MONSTER_ADVANCE_INFO);
            SocketConnection.addCmdListener(CommandID.GET_CUR_MAX_LEVEL_MONSTER_CNT,onGetPetNum);
            SocketConnection.send(CommandID.GET_CUR_MAX_LEVEL_MONSTER_CNT);
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
         });
      }
      
      private static function onGetPetNum(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_CUR_MAX_LEVEL_MONSTER_CNT,onGetPetNum);
         _num = (param1.data as ByteArray).readUnsignedInt();
         if(_num >= 3 && !BufferRecordManager.getMyState(639))
         {
            guideHandler();
         }
      }
      
      private static function onGetInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_MAX_LEVEL_MONSTER_ADVANCE_INFO,onGetInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _catchTime = _loc2_.readUnsignedInt();
         if(_catchTime > 0)
         {
            _info = PetManager.getPetInfo(_catchTime);
         }
         _type = _loc2_.readUnsignedInt();
         if(_type > 0)
         {
            upGrade();
         }
      }
      
      public static function updateView(param1:MovieClip, param2:*) : void
      {
         KTool.showScore(param1["atk"],param2.attack);
         KTool.showScore(param1["def"],param2.defence);
         KTool.showScore(param1["satk"],param2.s_a);
         KTool.showScore(param1["sdef"],param2.s_d);
         KTool.showScore(param1["spd"],param2.speed);
         KTool.showScore(param1["sta"],param2.hp);
         if(_type == 1)
         {
            KTool.showScore(param1["ev_atk"],param2.ev_attack);
            KTool.showScore(param1["ev_def"],param2.ev_defence);
            KTool.showScore(param1["ev_satk"],param2.ev_sa);
            KTool.showScore(param1["ev_sdef"],param2.ev_sd);
            KTool.showScore(param1["ev_spd"],param2.ev_sp);
            KTool.showScore(param1["ev_sta"],param2.ev_hp);
         }
         else if(_type == 2)
         {
            param1["t"].text = param2.dv;
         }
         else if(_type == 3)
         {
            param1["t"].text = NatureXMLInfo.getName(param2.nature);
         }
      }
      
      private static function upGrade() : void
      {
         var callback:Function = function():void
         {
            if(_type == UPGRADEENTITY)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/Tips"),"",{
                  "i":4,
                  "func":function():void
                  {
                     MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                     {
                        var e:MapEvent = param1;
                        MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                        NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，你回来啦，接下来让我们看一下如何提升精灵的个体吧"],["好的"],[function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["精灵的个体影响着精灵的所有属性。"],["所有属性？！"],[function():void
                           {
                              NpcDialog.show(NPC.DOCTOR,["是的，精灵的个体范围是0~31，精灵的个体越高，那么他的能力就越强大"],["那我改如何去提升精灵的个体呢？"],[function():void
                              {
                                 NpcDialog.show(NPC.DOCTOR,["精灵的个体可以通过精灵精灵修炼器或者商城购买的基因重组药剂来进行提升。"],["好的，我知道了。"],[function():void
                                 {
                                    NpcDialog.show(NPC.DOCTOR,["现在博士就帮你把一只精灵提升到满个体吧"],["好的，真是太棒了"],[function():void
                                    {
                                       ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/EntityUpgradePanel"),"",{
                                          "info":_info,
                                          "func":function():void
                                          {
                                             SocketConnection.send(1022,86057530 + _type - 1);
                                             NpcDialog.show(NPC.DOCTOR,["你的精灵个体已经提升完成了，快带它去对战，看看他的实力吧。"],["好，我这就去看看。"],[function():void
                                             {
                                                NpcDialog.show(NPC.DOCTOR,["明天记得再回来找我哦，我会告诉你如何改变精灵的性格。"],["好的。"]);
                                             }]);
                                          }
                                       });
                                    }]);
                                 }]);
                              }]);
                           }]);
                        }]);
                     });
                     MapManager.changeMap(5);
                  }
               });
            }
            else if(_type == UPGRADELEARNINGABILITY)
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  var e:MapEvent = param1;
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + ",很高兴你能够将精灵练到100级！"],["嘿嘿，我会继续努力培养精灵的"],[function():void
                  {
                     NpcDialog.show(NPC.DOCTOR,["你有留意过自己精灵的能力吗？"],["精灵的能力？"],[function():void
                     {
                        NpcDialog.show(NPC.DOCTOR,["是的，精灵的能力是由他的 个体，学习力，性格这3个主要部分组成，它们的强弱将直接关系到精灵对战时的胜负。"],["哇，这么厉害！博士能不能给我详细解释一下呢？"],[function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["哈哈，叫你来找我就是这个目的。下面让我们来看一下你的精灵学习力提升前后会有多么大的变化吧！"],["恩恩。"],[function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/LearningAbilityUpgradePanel"),"",{
                                 "info":_info,
                                 "func":function():void
                                 {
                                    SocketConnection.send(1022,86057530 + _type - 1);
                                    NpcDialog.show(NPC.DOCTOR,["现在你已经拥有一只满学习力的精灵了，快带它去对战，看看他的实力吧。"],["好，我这就去看看。"],[function():void
                                    {
                                       NpcDialog.show(NPC.DOCTOR,["明天记得再回来找我哦，我会教你如何去提升精灵的个体。"],["好的"]);
                                    }]);
                                 }
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               });
               MapManager.changeMap(5);
            }
            else if(_type == UPGRADECHARACTER)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/Tips"),"",{
                  "i":4,
                  "func":function():void
                  {
                     MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                     {
                        var e:MapEvent = param1;
                        MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                        NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，很高兴你又回来了，接下来让我们来看看如何改变精灵的性格吧嗯"],["嗯"],[function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["不同的精灵性格会影响到精灵的各项属性，一个优秀的性格对精灵来说也是非常重要的"],["怎么改变精灵的性格呢？"],[function():void
                           {
                              NpcDialog.show(NPC.DOCTOR,["精灵的性格可以通过商城购买神经元重组药剂，通过基地的太空温室获得性格果实来进行改变。"],["好的，我知道了"],[function():void
                              {
                                 NpcDialog.show(NPC.DOCTOR,["接下来博士将为你改变一次性格，让你看看性格对精灵能力的影响"],["好的，麻烦博士啦"],[function():void
                                 {
                                    ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/CharacterUpgradePanel"),"",{
                                       "info":_info,
                                       "func":function():void
                                       {
                                          SocketConnection.send(1022,86057530 + _type - 1);
                                          NpcDialog.show(NPC.DOCTOR,["你的精灵性格已经提升完成了，快带它去对战，看看他的实力吧。"],["好，我这就去看看。"]);
                                       }
                                    });
                                 }]);
                              }]);
                           }]);
                        }]);
                     });
                     MapManager.changeMap(5);
                  }
               });
            }
         };
         SocketConnection.send(1022,86057525 + _type - 1);
         if(_catchTime > 0)
         {
            callback();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/Tips"),"",{
               "i":4,
               "func":function():void
               {
                  PetChoosePanel.show(function(param1:PetInfo):void
                  {
                     _info = param1;
                     callback();
                  },null,function(param1:PetInfo):Boolean
                  {
                     if(param1.level >= 100)
                     {
                        return true;
                     }
                     return false;
                  });
               }
            });
         }
      }
      
      public static function guideHandler() : void
      {
         var callback:Function = function():void
         {
            flag = true;
            EventManager.addEventListener("onGuideClose",function(param1:DynamicEvent):void
            {
               var e:DynamicEvent = param1;
               EventManager.removeEventListener("onGuideClose",arguments.callee);
               flag = false;
               if(BufferRecordManager.getMyState(639))
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/Tips"),"",{
                     "i":3,
                     "func":function():void
                     {
                        MapManager.addAppArrowListener(433,533,142,30);
                        MapManager.changeMap(433);
                        SocketConnection.send(1022,86057533);
                     },
                     "info":_info
                  });
               }
            });
            SpriteCountermarkController.show(_info);
         };
         SocketConnection.send(1022,86057528);
         ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/Tips"),"",{
            "i":2,
            "func":function():void
            {
               if(BufferRecordManager.getMyState(640))
               {
                  callback();
               }
               else
               {
                  SocketConnection.addCmdListener(CommandID.GET_MINTMARK_BY_MAX_LEVEL_MONSTER,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(CommandID.GET_MINTMARK_BY_MAX_LEVEL_MONSTER,arguments.callee);
                     BufferRecordManager.setMyState(640,true);
                     ItemInBagAlert.show(10027,"一个大型攻击刻印放进你的背包");
                     ItemInBagAlert.show(10029,"一个大型特攻刻印放进你的背包");
                     callback();
                  });
                  SocketConnection.send(CommandID.GET_MINTMARK_BY_MAX_LEVEL_MONSTER);
               }
            }
         });
      }
      
      public static function upGradeHander(param1:Function) : void
      {
         var func:Function = param1;
         SocketConnection.addCmdListener(CommandID.ADVANCE_MAX_LEVEL_MONSTER,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.ADVANCE_MAX_LEVEL_MONSTER,arguments.callee);
            PetManager.upDate(function():void
            {
               func(PetManager.getPetInfo(_info.catchTime));
            });
         });
         SocketConnection.send(CommandID.ADVANCE_MAX_LEVEL_MONSTER,_info.catchTime,_type);
      }
      
      private static function onGetNotice(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         var num:uint = (e.data as ByteArray).readUnsignedInt();
         if(num == 1)
         {
            SocketConnection.send(1022,86057524);
            ModuleManager.showModule(ClientConfig.getAppModule("pvpGuide/Tips"),"",{
               "i":1,
               "func":function():void
               {
                  MapManager.addAppArrowListener(102,250,117,30);
                  MapManager.changeMap(102);
                  SocketConnection.send(1022,86057529);
               }
            });
         }
         else if(num == 2)
         {
            _type = UPGRADELEARNINGABILITY;
            upGrade();
         }
         else if(num == 3)
         {
            if(!BufferRecordManager.getMyState(639))
            {
               guideHandler();
            }
         }
      }
   }
}
