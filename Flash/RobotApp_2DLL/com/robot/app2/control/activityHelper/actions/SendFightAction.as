package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.net.SocketConnection;
   
   public class SendFightAction extends BaseAction
   {
       
      
      public function SendFightAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var i:int;
         var cmdId:int;
         var defered:Deferred = null;
         var temp:Number = NaN;
         var args:* = param1;
         var cmdArgs:Array = new Array();
         if(_data["args"] != null)
         {
            cmdArgs = cmdArgs.concat(_data["args"]);
         }
         i = 1;
         while(i <= cmdArgs.length)
         {
            if(cmdArgs[i - 1] == "arg")
            {
               if(args != null)
               {
                  if(args is Array)
                  {
                     cmdArgs[i - 1] = (args as Array).shift();
                  }
                  else
                  {
                     cmdArgs[i - 1] = args;
                     args = null;
                  }
               }
               else
               {
                  cmdArgs[i - 1] = 0;
               }
            }
            else if(String(cmdArgs[i - 1]).indexOf("-") != -1)
            {
               temp = parseInt(String(cmdArgs[i - 1]).split("-")[0]);
               if(args != null)
               {
                  if(args is Array)
                  {
                     cmdArgs[i - 1] = temp - 1 + (args as Array).shift();
                  }
                  else
                  {
                     cmdArgs[i - 1] = temp - 1 + args;
                     args = null;
                  }
               }
               else
               {
                  cmdArgs[i - 1] = temp;
               }
            }
            i++;
         }
         i = 1;
         while(i <= cmdArgs.length)
         {
            cmdArgs[i - 1] = parseInt(String(cmdArgs[i - 1]));
            i++;
         }
         if(args != null)
         {
            cmdArgs = cmdArgs.concat(args);
         }
         cmdId = int(_data["cmdId"]);
         defered = new Deferred();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            defered.resolve(param1.dataObj as FightOverInfo);
         });
         SocketConnection.sendWithPromise(cmdId,cmdArgs);
         return defered.promise;
      }
   }
}
