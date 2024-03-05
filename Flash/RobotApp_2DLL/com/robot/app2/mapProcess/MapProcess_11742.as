package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11742 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      protected var _step:int;
      
      protected var recordId:int = 24215;
      
      public function MapProcess_11742()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         StatManager.sendStat2014("1019丰收节庆典","进入烟水迷阵场景","2018运营活动");
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               if(MainManager.actorInfo.mapID == 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     MapManager.changeMapWithCallback(2,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                  });
               }
               break;
            case "close":
               this.hideTipsMc();
               break;
            case "bossBtn":
               if(this._step == 1)
               {
                  NpcDialog.show(1140,["麦田村的人年年都来拔这几株草，我倒要看看是个什么宝贝……"],["原来烟波草在你这里！"],[function():void
                  {
                     NpcDialog.show(1140,["烟波草？什么烟波草？"],["你还装蒜？"],[function():void
                     {
                        showTipsMc();
                     }],false,null,true);
                  }],false,null,true);
               }
               if(this._step == 2)
               {
                  if(BitBuffSetClass.getState(this.recordId) == 0 || true)
                  {
                     NpcDialog.show(1140,["好……好吧，我这里是有一株草，喏，给你。"],["谢谢！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["嗯？等下，这株草已经干燥透了，显然不是刚刚采摘的。看其外表，也没有“烟波”的样子……"],["..."],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["好家伙，你敢骗我！"],["找打！"],[function():void
                           {
                              BitBuffSetClass.setState(recordId,1);
                              showTipsMc();
                           }],false,null,false);
                        }],false,null,false);
                     }],false,null,true);
                  }
                  else
                  {
                     this.showTipsMc();
                  }
               }
               break;
            case "fightBtn":
               this._map.controlLevel["tipsMc"].visible = false;
               FightManager.fightNoMapBoss("朵莉哈特",14389,false,true,function():void
               {
                  if(!FightManager.isWin)
                  {
                  }
               });
               break;
            case "aKeyFightBtn":
               CommonUI.setEnabled(this._map.controlLevel,false,false);
               KTool.buyProductByCallback(254666,1,function():void
               {
                  KTool.socketSendCallBack(43304,function():void
                  {
                     CommonUI.setEnabled(_map.controlLevel,true,false);
                     update();
                  },[10,1]);
               },null,function():void
               {
                  CommonUI.setEnabled(_map.controlLevel,true,false);
               });
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
      
      protected function showTipsMc() : void
      {
         this._map.controlLevel["tipsMc"].visible = true;
         KTool.hideMapAllPlayerAndMonster();
      }
      
      protected function hideTipsMc() : void
      {
         this._map.controlLevel["tipsMc"].visible = false;
         KTool.showMapAllPlayerAndMonster();
      }
      
      protected function update() : void
      {
         this.hideTipsMc();
         KTool.getMultiValue([104605],function(param1:Array):void
         {
            var va:Array = param1;
            _step = va[0];
            if(_step == 1)
            {
               NpcDialog.show(NPC.SEER,["烟波草……咦，水边没有长草呀？"],["这跟村长的描述不太一样……"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["哎呀，正好那边有只精灵，我去问问。"],["..."],[function():void
                  {
                  }],false,null,false);
               }],false,null,false);
            }
            else if(_step == 2)
            {
               if(BitBuffSetClass.getState(recordId) == 0 || true)
               {
                  NpcDialog.show(1140,["好……好吧，我这里是有一株草，喏，给你。"],["谢谢！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["嗯？等下，这株草已经干燥透了，显然不是刚刚采摘的。看其外表，也没有“烟波”的样子……"],["..."],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["好家伙，你敢骗我！"],["找打！"],[function():void
                        {
                           BitBuffSetClass.setState(recordId,1);
                           showTipsMc();
                        }],false,null,false);
                     }],false,null,false);
                  }],false,null,true);
               }
               else
               {
                  showTipsMc();
               }
            }
            else if(_step == 3)
            {
               NpcDialog.show(1140,["别打了，别打了！给你，都给你！呜呜呜……"],["..."],[function():void
               {
                  NpcDialog.show(NPC.SEER,["这次的看起来倒应该是真的了，哼！先放过你，如果这次还有什么问题，我会回来找你的算账！"],["相信我，肯定没问题了！"],[function():void
                  {
                     MapManager.changeMap(11741);
                  }],false,null,false);
               }],false,null,true);
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
