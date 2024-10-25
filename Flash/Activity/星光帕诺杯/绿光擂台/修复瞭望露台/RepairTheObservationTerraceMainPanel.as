package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   
   public class RepairTheObservationTerraceMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _chooseTeam:Boolean = false;
      
      private var _unlockIndexArr:Array;
      
      private var _bitArr_0:Array;
      
      private var _bitArr_1:Array;
      
      private var _aniMFrameArr:Array;
      
      public function RepairTheObservationTerraceMainPanel()
      {
         this._bitArr_0 = [1,3,4,5];
         this._bitArr_1 = [6,8,9,10];
         this._aniMFrameArr = [[0,1],[2,3],[0,2],[1,3],[0,3],[1,2]];
         super();
         resUrl = "2024/1025/RepairTheObservationTerraceMainPanel";
         configUrl = "2024/1025/repairTheObservationTerraceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         _mainUI.playMc.visible = false;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("XingGuangPaNuoBeiS1Panel");
               break;
            case "chouquBtn":
               if(this._chooseTeam)
               {
                  sendCmd(this._commdId,[3,1],function():void
                  {
                     _unlockIndexArr = [];
                     KTool.getMultiValue([10681],function(va:Array):void
                     {
                        var i:int = 0;
                        var fameIndex:int = 0;
                        for(i = 0; i < 4; i++)
                        {
                           if(BitUtils.getBit(va[0],_bitArr_0[i] - 1) > 0)
                           {
                              _unlockIndexArr.push(i);
                           }
                        }
                        for(i = 0; i < 6; i++)
                        {
                           if(arraysEqual(_aniMFrameArr[i],_unlockIndexArr))
                           {
                              fameIndex = i + 1;
                              break;
                           }
                        }
                        closeEvent();
                        _mainUI.playMc.visible = true;
                        AnimateManager.playMcAnimate(_mainUI.playMc,fameIndex,"mc" + fameIndex,function():void
                        {
                           _mainUI.playMc.visible = false;
                           refresh();
                           openEvent();
                        });
                     });
                  });
               }
               else
               {
                  StatManager.sendStat2014("1025修复瞭望露台","没有抽取队伍而出现弹窗提示","2024运营活动");
                  Alert.show("您还没有进行帕诺杯分队，请前往分队！",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("XingGuangPaNuoBeiMainPanel\t");
                  });
               }
               break;
            case "go_" + index:
               this.hide();
               ModuleManager.showAppModule("RepairTheObservationTerraceGame" + index + "Panel");
               break;
            case "shopBtn":
               this.hide();
               ModuleManager.showAppModule("RepairTheObservationTerraceShopPanel");
         }
      }
      
      internal function arraysEqual(a:Array, b:Array) : Boolean
      {
         if(a.length != b.length)
         {
            return false;
         }
         for(var i:int = 0; i < a.length; i++)
         {
            if(a[i] !== b[i])
            {
               return false;
            }
         }
         return true;
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         this._commdId = getValue("comId")[0];
         var forever_105759:int = int(getValue("forever_105759"));
         _mainUI.itemNumTx.text = String(forever_105759);
         var forever_108523:int = int(getValue("forever_108523"));
         this._chooseTeam = forever_108523 > 0 ? true : false;
         var state:* = getValue("State");
         if(state == 0)
         {
            CommonUI.setEnabled(_mainUI.chouquBtn,true,false);
            _mainUI.chouquBtn.visible = true;
            _mainUI.lineMc.visible = true;
            for(i = 0; i < 4; i++)
            {
               CommonUI.setEnabled(_mainUI["go_" + i],false,false);
               _mainUI["stateMc_" + i].gotoAndStop(1);
               _mainUI["mask_" + i].visible = true;
            }
         }
         else
         {
            this._unlockIndexArr = [];
            CommonUI.setEnabled(_mainUI.chouquBtn,false,true);
            _mainUI.chouquBtn.visible = false;
            _mainUI.lineMc.visible = false;
            for(i = 0; i < 4; i++)
            {
               _mainUI["mask_" + i].visible = false;
               if(BitUtils.getBit(state,this._bitArr_0[i] - 1) > 0)
               {
                  _mainUI["stateMc_" + i].gotoAndStop(2);
                  CommonUI.setEnabled(_mainUI["go_" + i],true,false);
                  if(BitUtils.getBit(state,this._bitArr_1[i] - 1) > 0)
                  {
                     _mainUI["stateMc_" + i].gotoAndStop(3);
                     CommonUI.setEnabled(_mainUI["go_" + i],false,false);
                  }
               }
               else
               {
                  _mainUI["mask_" + i].visible = true;
                  _mainUI["stateMc_" + i].gotoAndStop(1);
                  CommonUI.setEnabled(_mainUI["go_" + i],false,false);
               }
            }
         }
      }
      
      override public function hide() : void
      {
         this._unlockIndexArr = null;
         this._aniMFrameArr = null;
         this._bitArr_0 = null;
         this._bitArr_1 = null;
         super.hide();
      }
   }
}

