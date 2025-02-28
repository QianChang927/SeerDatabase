package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_1304 extends BaseMapProcess
   {
       
      
      protected var _bossIndexArr:Array;
      
      protected var _fightNum:int;
      
      protected var _petIdArr:Array;
      
      protected var _numArr:Array;
      
      protected var _curIndex:int;
      
      protected var _isWin:Boolean;
      
      protected var isNpcClick:Boolean;
      
      public function MapProcess_1304()
      {
         this._petIdArr = [1148,1170,620,230,476,833];
         this._numArr = [6,7,8,8];
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("强者试炼","进入强者试炼场景","精灵捕猎场");
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.showOrHideMc(false);
         this.update();
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var numArr:Array = null;
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         index = int(str.split("_")[1]);
         switch(str)
         {
            case "npcBtn":
               if(!this.isNpcClick)
               {
                  this.setMouseClick(false);
                  NpcDialog.show(1450,["你看到那些闪烁的球了吗？它们好漂亮！0xff0000" + MainManager.actorInfo.nick + "0xffffff，你去帮我收集一些光球，好不好嘛？"],["当然可以！"],[function():void
                  {
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        showOrHideMc(true);
                        update();
                        setMouseClick(true);
                     },[9,1]);
                  },function():void
                  {
                     CommonUI.setEnabled(conLevel["npcMc"],true,false);
                     setMouseClick(true);
                  }],false,null,true);
               }
               break;
            case "bigBtn":
               if(this._isWin)
               {
                  this.setMouseClick(false);
                  NpcDialog.show(1451,["我对自己的力量太自负了，原来之前的我一直在坐井观天。0xff0000" + MainManager.actorInfo.nick + "0xffffff，你愿意带我出去，让我见识一下外面的世界吗？"],["没问题，成为我的伙伴吧！","让我再考虑一下。"],[function():void
                  {
                     showOrHideMc(true);
                     setMouseClick(true);
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        MapManager.changeMap(1301);
                     },[9,2]);
                  },function():void
                  {
                     setMouseClick(true);
                  }],false,null,true);
               }
               else
               {
                  this.setMouseClick(false);
                  NpcDialog.show(1451,["谢谢你！我已经迫不及待想要感受一下自己的新力量了！你能陪我切磋一下吗？"],["我很乐意！","我还有事要忙。"],[function():void
                  {
                     setMouseClick(true);
                     showOrHideMc(true);
                     FightManager.fightNoMapBoss("",13067,false,true,function():void
                     {
                        fightOver();
                     });
                  },function():void
                  {
                     setMouseClick(true);
                  }],false,null,true);
               }
               break;
            case "ballBtn_" + index:
               numArr = [1,7,14];
               KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  conLevel["ballBtn_" + index].visible = false;
                  KTool.getMultiValue([16816],function(param1:Array):void
                  {
                     var va:Array = param1;
                     var index1:int = int(KTool.subByte(va[0],8,4));
                     if(index1 > _curIndex)
                     {
                        if(index1 == 1)
                        {
                           conLevel["numMc"]["numTx"].text = String(6) + "/" + _numArr[_curIndex];
                           NpcDialog.show(1450,["这些光球真是太棒了！唔……我还想再要7个光球，可以吗？"],["呃……好！"],[function():void
                           {
                              showOrHideMc(true);
                              update();
                           }],false,null,true);
                        }
                        else if(index1 == 2)
                        {
                           conLevel["numMc"]["numTx"].text = String(7) + "/" + _numArr[_curIndex];
                           NpcDialog.show(1450,["我感觉自己变强大了！可能……再给我8个光球，我就能进化了！"],["真的吗？那你稍等，我再给你弄点光球来！"],[function():void
                           {
                              showOrHideMc(true);
                              update();
                           }],false,null,true);
                        }
                        else
                        {
                           conLevel["numMc"]["numTx"].text = String(8) + "/" + _numArr[_curIndex];
                           NpcDialog.show(1451,["谢谢你！我已经迫不及待想要感受一下自己的新力量了！你能陪我切磋一下吗？"],["我很乐意！","我还有事要忙。"],[function():void
                           {
                              FightManager.fightNoMapBoss("",13067,false,true,function():void
                              {
                                 fightOver();
                              });
                           },function():void
                           {
                              update();
                           }],false,null,true);
                        }
                     }
                     else
                     {
                        update();
                     }
                  });
               },[8,index + numArr[this._curIndex]]);
               break;
            case "capsuleNpcBtn":
               NpcDialog.show(NPC.ROCKY,["我怕你胶囊不够用了，特意跟了过来。"],["我想买些胶囊。","我想离开这里。","我还有事，等会再来找你。"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsCapsuleShopPanel"),"正在打开....");
               },function():void
               {
                  Alert.show("每天只有一次进入空间裂缝的机会，你确定要中途离开吗？",function():void
                  {
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        MapManager.changeMap(1301);
                     },[7,3]);
                  });
               }],false,null,false);
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
      
      private function fightOver() : void
      {
         if(this._isWin)
         {
            this.setMouseClick(false);
            NpcDialog.show(1451,["我对自己的力量太自负了，原来之前的我一直在坐井观天。" + MainManager.actorInfo.nick + "，你愿意带我出去，让我见识一下外面的世界吗？"],["没问题，成为我的伙伴吧！","让我再考虑一下。"],[function():void
            {
               KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
               {
                  MapManager.changeMap(1301);
                  setMouseClick(true);
               },[9,2]);
            },function():void
            {
               setMouseClick(true);
            }],false,null,true);
         }
      }
      
      private function showOrHideMc(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 8)
         {
            conLevel["ballBtn_" + _loc2_].visible = param1;
            _loc2_++;
         }
      }
      
      private function onFightOver(param1:*) : void
      {
         var e:* = param1;
         KTool.getMultiValue([16816],function(param1:Array):void
         {
            var va:Array = param1;
            var num:int = int(KTool.subByte(va[0],12,4));
            if(num == _fightNum)
            {
               NpcDialog.show(_petIdArr[_bossIndexArr[_fightNum] - 1],["看来你准备的还不够充分。再给你一次机会，你好了就来找我。"],["我会继续努力的！"],[function():void
               {
               }],false,null,true);
            }
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         });
      }
      
      protected function update() : void
      {
         KTool.getMultiValue([16816],function(param1:Array):void
         {
            var _loc4_:int = 0;
            _curIndex = KTool.subByte(param1[0],8,4);
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            while(_loc3_ < 8)
            {
               if(_loc3_ < _numArr[_curIndex])
               {
                  if(BitUtils.getBit(param1[0],_loc3_) > 0)
                  {
                     _loc2_++;
                     conLevel["ballBtn_" + _loc3_].visible = false;
                  }
               }
               else
               {
                  conLevel["ballBtn_" + _loc3_].visible = false;
               }
               _loc3_++;
            }
            isNpcClick = BitUtils.getBit(param1[0],13) > 0 ? true : false;
            _isWin = BitUtils.getBit(param1[0],12) > 0 ? true : false;
            conLevel["npcMc"].gotoAndStop(_curIndex >= 3 ? 2 : 1);
            if(_curIndex >= 3)
            {
               _loc4_ = 0;
               while(_loc4_ < 8)
               {
                  conLevel["ballBtn_" + _loc4_].visible = false;
                  _loc4_++;
               }
               conLevel["numMc"].visible = false;
            }
            else if(isNpcClick)
            {
               conLevel["numMc"].visible = true;
               conLevel["numMc"]["numTx"].text = String(_loc2_) + "/" + _numArr[_curIndex];
            }
            else
            {
               conLevel["numMc"].visible = false;
            }
            if(BitUtils.getBit(param1[0],14) > 0)
            {
               conLevel["npcMc"].visible = false;
               MapManager.changeMap(1301);
            }
            else
            {
               fightOver();
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
