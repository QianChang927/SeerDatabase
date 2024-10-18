package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SairoUltramanOutputFightView
   {
      private var _mainUI:MovieClip;
      
      private var _allPetArr:Array;
      
      private var _updateFun:Function;
      
      private var _curBossIndex:int;
      
      private var _curLv:int;
      
      public function SairoUltramanOutputFightView(mc:MovieClip, updateFun:Function)
      {
         super();
         this._mainUI = mc;
         this._updateFun = updateFun;
         this._mainUI.addEventListener(MouseEvent.CLICK,this.onUIClick);
         this.update();
      }
      
      private static function fightOverHandler(e:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         ModuleManager.showAppModule("SairoUltramanOutputMainPanel",true);
      }
      
      public static function getFristBagALLPetLvIsFull() : Boolean
      {
         var info:PetInfo = null;
         for each(info in PetManager.infos)
         {
            if(info.level < 100)
            {
               return false;
            }
         }
         return true;
      }
      
      public function show(index:int = 0) : void
      {
         this.update();
         this._mainUI.visible = true;
         StatManager.sendStat2014("1018赛罗奥特曼输出","打开每日试炼面板","2024运营活动");
      }
      
      public function hide() : void
      {
         this._mainUI.visible = false;
      }
      
      private function onUIClick(e:MouseEvent) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "close_fight":
               this.hide();
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               PetManager.currencyCureAll();
               break;
            case "fightBossBtn":
               if(!getFristBagALLPetLvIsFull())
               {
                  Alarm2.show("背包内精灵等级均为100级方可进入试炼！");
                  return;
               }
               SocketConnection.sendByQueue(41900,[89,1],function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
               });
               break;
            case "aKeyPassBtn":
               KTool.buyProductByCallback(261015,1,function():void
               {
                  SocketConnection.sendByQueue(41900,[89,2],function():void
                  {
                     KTool.getMultiValue([203157],function(va:Array):void
                     {
                        if(KTool.subByte(va[0],0,8) > 10)
                        {
                           Alarm2.show("恭喜你，已帮助赛罗奥特曼完成今日试炼！",function():void
                           {
                              hide();
                           });
                        }
                     });
                     update();
                     if(_updateFun != null)
                     {
                        _updateFun();
                     }
                  });
               },this._mainUI);
         }
      }
      
      public function update() : void
      {
         KTool.getMultiValue([203157,203158,203159],function(va:Array):void
         {
            _curLv = KTool.subByte(va[0],0,8);
            _mainUI.curLvTx.text = "" + _curLv;
            _mainUI.roundTx.text = "" + KTool.subByte(va[0],16,16);
            var curLv:int = _curLv > 10 ? 10 : _curLv;
            _curBossIndex = curLv < 9 ? int(KTool.subByte(va[1],(curLv - 1) * 4,4)) : int(KTool.subByte(va[2],(curLv - 9) * 4,4));
            _mainUI.titleMc.gotoAndStop(_curBossIndex);
            _mainUI.effectMc.gotoAndStop(_curBossIndex);
         });
      }
      
      public function destroy() : void
      {
         this._mainUI.removeEventListener(MouseEvent.CLICK,this.onUIClick);
         this._mainUI = null;
         this._allPetArr = null;
      }
   }
}

